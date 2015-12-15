var reposController = {};

reposController.index = function() {
  //TODO: How would you like to setup your index action?
  repos.requestRepos(repoView.index);
};
