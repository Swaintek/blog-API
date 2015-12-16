var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  //TODO: How would you like to fetch your repos?
  $.ajax({
    type: 'GET',
    url: '/github/users/swaintek/repos' +
    '?sort=updated'
  }).done(function(data) {
    console.log(data);
    repos.all = data;
  }).done(callback);
};
