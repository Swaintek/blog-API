var repoView = {};

repoView.index = function() {
  repoView.ui();

  var _append = function(repo) {
    $('#about ul').append(repoView.render(repo));
  };

  repos.all.forEach(_append);
};

repoView.render = function(repo) {
  return ('<li><a href='+repo.html_url+'>'+repo.full_name+'</a></li>');

};

repoView.ui = function() {
  var $about = $('#about');
  var $ul = $about.find('ul');

  $ul.empty();
  $about.fadeIn().siblings().hide();
};
