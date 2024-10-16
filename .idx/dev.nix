{ pkgs }: {
  channel = "stable-23.11";

  packages = [
    pkgs.nodejs_20
    pkgs.yarn
  ];

  idx.extensions = [
    "eamodio.gitlens"
    "mhutchie.git-graph"
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
  ];

  idx.workspace.onCreate = {
    install-yarn = "npm i -g yarn";
  };

  # idx.previews = {
  #   previews = {
  #     web = {
  #       command = [
  #         "yarn"
  #         "start"
  #       ];
  #       env = {
  #         PORT = "$PORT";
  #       };
  #       manager = "web";
  #     };
  #   };
  # };
}
