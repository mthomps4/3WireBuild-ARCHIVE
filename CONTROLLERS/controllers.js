app.controller('HomeController', function($scope) {

});

app.controller('AboutController', function($scope) {

});

app.controller('ProjectsController', function($scope) {

});

app.controller('ResourcesController', function($scope) {

});

app.controller('BlogController', function($scope) {

});

app.controller('NavController', function($scope,$window,$document){

  $window.onload = function(){
    var button = document.getElementById('menuButton');
    var nav1 = document.getElementById('main-nav');
    var nav2 = document.getElementById('main-nav2');

    if(window.innerWidth < 489){
      // alert("Window < 489");
      nav1.style.display = "none";
      button.style.display = "block";
      nav2.style.display = "none";
    }

    if(window.innerWidth > 489){
      // alert("Window > 489");
      button.style.display = "none";
      nav1.style.display = "none";
      nav2.style.display = "flex";
      }

};

});
