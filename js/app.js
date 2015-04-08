app = angular.module('app', []);

//get url
pathArray = window.location.href.split('/');
protocol = pathArray[0];
path = pathArray[2];
host = pathArray[3];
var base_url = protocol + '//' + path + '/' + host;

app.config(function($routeProvider, $httpProvider) {
$routeProvider
    .when('/posts', {templateUrl: 'partials/posts.html', controller: 'PostListCtrl'})
    .when('/new-post', {templateUrl: 'partials/new-post.html', controller: 'NewPostCtrl'})
    .when('/edit-post/:id', {templateUrl: 'partials/edit-post.html', controller: 'EditPostCtrl'})
    .when('/course/:index', {templateUrl: 'partials/course.html', controller: 'CourseCtrl'})
    .when('/como-estudar', {templateUrl: 'partials/como-estudar.html', controller: 'HowToStudyCtrl'})
    .when('/depoimentos', {templateUrl: 'partials/depoimentos.html', controller: 'TestimonialsCtrl'})
    .when('/contato', {templateUrl: 'partials/contato.html', controller: 'ContactCtrl'})
    .when('/cadastro', {templateUrl: 'partials/cadastro.html', controller: 'SignCtrl'})
    .when('/teste-de-nivel', {templateUrl: 'partials/teste-de-nivel.html', controller: 'TestLevelCtrl'})
    .when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'})
    .otherwise({redirectTo: '/', templateUrl: 'partials/home.html',controller: 'HomeCtrl'});
});

app.run(function($rootScope) {
    $rootScope.base_url = base_url;
});