var aboutView = {};

aboutView.index = function () {
  aboutView.ui();

  var _append = function (repos) {
    $('#about ul').append(
      repos.map(aboutView.render(repo)));
  };

  repos
    .all
    .filter(function (repo) {
      return repo.stargazers_count;
    }).forEach(_append);
};
