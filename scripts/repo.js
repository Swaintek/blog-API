var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  //TODO: How would you like to fetch your repos?
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/swaintek/repos' +
    '?sort=updated',
    headers: {Authorization: 'token ' + githubToken}
  }).done(function(data) {
    console.log(data);
    repos.all = data;
  }).done(callback);
};
