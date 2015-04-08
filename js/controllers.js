

app.controller('AppCtrl', function($scope, $rootScope, $http, $location) {

});

app.controller('PostListCtrl', function($scope, $rootScope, $http, $location, $timeout) {
    $scope.msg = false;
    $scope.load = function() {
        $http.get(base_url + '/posts.json')
        .success(function(data, status, headers, config) {
            $scope.posts = data.posts;
            //angular.copy($scope.posts, $scope.copy);
        });
    }

    $scope.load();

    $scope.addPost = function() {
        $location.path("/new-post");
    }

    $scope.editPost = function(index) {
        $location.path('/edit-post/' + $scope.posts[index].Post.id);
    }

    $scope.delPost = function(index) {
        var todel = $scope.posts[index];
        $http.delete(base_url + '/posts/' + todel.Post.id + '.json')
        .success(function(data, status, headers, config) {
            $scope.load();
            $scope.msg = 'Curso deletado com sucesso!';
            $timeout(function(){
                $scope.msg = null;
            }, 5000);
        });
    }

});

app.controller('NewPostCtrl', function($scope, $rootScope, $http, $location) {

    $scope.post = {};

    $scope.savePost = function() {
        var _data = {};
        _data.Post = $scope.post;
        $http
        .post(base_url + '/posts.json', _data)
        .success(function(data, status, headers, config) {
            $location.path('/posts');
        }).error(function(data, status, headers, config) {
        });
    }
});

app.controller('EditPostCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

    var load = function() {
        $http.get(base_url + '/posts/' + $routeParams['id'] + '.json')
        .success(function(data, status, headers, config) {
            $scope.post = data.post.Post;
            angular.copy($scope.post, $scope.copy);
        });
    }

    load();

    $scope.post = {};

    $scope.updatePost = function() {
        var _data = {};
        _data.Post = $scope.post;
        $http
        .put(base_url + '/posts/' + $scope.post.id + '.json', _data)
        .success(function(data, status, headers, config) {
            $location.path('/posts');
        }).error(function(data, status, headers, config) {
        });
    }
});

app.controller('HomeCtrl', function($scope, $rootScope, $http, $routeParams, $location) {
    $http.get(base_url + '/courses.json').success(function(data){
        $scope.courses = data;
    });

    $scope.show_details = function(index)
    {
        $('html, body').animate({
            scrollTop: $('#show_details').offset().top
        }, 1500);

        $scope.details_index = index;
        $scope.show_details_section = true;
    }
    $scope.nav_course = function(direction)
    {
        var _num = $scope.courses.length;
        _num--;

        if(direction === '-' && $scope.details_index > 0 )
        {
            $scope.details_index--;
        }
        else if(direction === '+' && $scope.details_index < _num)
        {
            $scope.details_index++;
        }
    }

    $scope.show_course = function() {
        $location.path('/course/' +  $scope.details_index);
    }
});

app.controller('CourseCtrl', function($scope, $rootScope, $http, $routeParams, $location) {
    $http.get(base_url + '/courses.json').success(function(data){
        var course = data;
        var routeParams = $routeParams['index'];
        $scope.course = course[routeParams];
    });

});

app.controller('LoginCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

});

app.controller('HowToStudyCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

});

app.controller('TestimonialsCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

});

app.controller('ContactCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

});

app.controller('SignCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

});

app.controller('TestLevelCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

});