{ mkPnpmPackage }:

mkPnpmPackage {
  src = ./.;

  installInPlace = true;

  script = "build";

  installPhase = ''
    mkdir -p $out/html/
    cp -r ./dist/tanneberger/browser/* $out/html/
  '';
}
