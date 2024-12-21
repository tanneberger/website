{ lib, stdenv, nodejs, pnpm, static ? false }:

let
  manifest = lib.importJSON ./package.json;
in
stdenv.mkDerivation (finalAttrs: {
  pname = "website";
  inherit (manifest) version;

  src = lib.cleanSourceWith {
    filter = name: type: ((!lib.hasSuffix ".nix" name) && (builtins.dirOf name) != "node_modules");
    src = lib.cleanSource ./.;
  };

  pnpmDeps = pnpm.fetchDeps {
    inherit (finalAttrs) pname version src;
    hash = "sha256-QJywB42aJcPjOT25ewEqMC001iSmOJRULLKKlsJBoDU=";
  };

  nativeBuildInputs = [ nodejs pnpm.configHook ];

  buildPhase = ''
    pnpm run "build"
  '';

  installPhase = ''
    runHook preInstall
    mkdir -p $out/html
    cp -r ./dist/tanneberger/browser/* $out/html
    runHook postInstall
  '';
})
