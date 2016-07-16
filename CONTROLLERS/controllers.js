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

app.controller('ContactController', function ($scope) {

});

app.controller('active', function($scope, $location){
        $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
        };
        console.log($location.path());
    });

app.controller('active2', function($scope, $location){
            $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
            };
            console.log($location.path());
        });

app.controller('NavController', function($scope,$window,$document, $location){

    var button = document.getElementById('menuButton');
    var nav1 = document.getElementById('main-nav');
    var nav2 = document.getElementById('main-nav2');
    var header = document.getElementById('');

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

    window.onresize = function(){
        if(window.innerWidth < 489){
          nav1.style.display = "none";
          button.style.display = "block";
          nav2.style.display = "none";
        }

        if(window.innerWidth > 489){
          button.style.display = "none";
          nav1.style.display = "none";
          nav2.style.display = "flex";

          }
    }

    //Mobile Menu Button Toggle
    button.addEventListener('click', function(event) {
        if (nav1.style.display == "none"){
            nav1.style.display = "flex";
        }
        else {
            nav1.style.display = "none";
        }
        });

    nav1.addEventListener('click', function(event){
      this.style.display = "none";
    });

    document.addEventListener('click', function(event){
      var button = document.getElementById('menuButton');
      if(event.target !== button){
        nav1.style.display = "none";
      }
    });

    // document.addEventListener('touchstart', function(event){
    //   var button = document.getElementById('menuButton');
    //   var nav1 = document.getElementById('main-nav');
    //
    //   if(event.target !== nav1){
    //     nav1.style.display = "none";
    //   }
    // });

}); //END NAV CONTROLLER
