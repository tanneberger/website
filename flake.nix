{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = (import nixpkgs) {
            inherit system;
          };
        in
        {
          packages = rec {
            website = pkgs.callPackage ./derivation.nix { };
            default = website;
          };
        }
      ) // {
      overlays.default = _: prev: {
        website = self.packages."${prev.system}".website;
      };

      nixosModules = rec {
        website = import ./module.nix;
        default = website;
      };
    };
}
