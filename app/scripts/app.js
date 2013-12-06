'use strict';

angular.module('goodgymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  // 'ngAnimate',
  'ngRoute',
  // Third Party Modules
  'toaster'
])
  .config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

      var access = routingConfig.accessLevels;

      // console.log('access details:');
      // console.log(access);

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          access: access.anon //user, anon, admin or public
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          access: access.anon
        })
        .when('/runs', {
          templateUrl: 'views/runs.html',
          controller: 'RunsCtrl',
          access: access.anon
        })
        .when('/runs/:runId', {
          templateUrl: 'views/runDetail.html',
          controller: 'RunDetailCtrl',
          access: access.anon
        })
        .when('/manage', {
          templateUrl: 'views/manage.html',
          controller: 'ManageCtrl',
          access: access.anon
        })
        .when('/account', {
          templateUrl: 'views/account.html',
          controller: 'AccountCtrl',
          access: access.anon
        })
        .when('/team', {
          templateUrl: 'views/team.html',
          controller: 'TeamCtrl',
          access: access.anon
        })
        .when('/404', {
          templateUrl: 'views/404.html',
          access: access.public
        })
        .otherwise({
          redirectTo: '/404',
        });

      $locationProvider.html5Mode(true);

      var interceptor = ['$location', '$q',
        function($location, $q) {
          function success(response) {
            return response;
          }

          function error(response) {

            if (response.status === 401) {
              $location.path('/login');
              return $q.reject(response);
            } else {
              return $q.reject(response);
            }
          }

          return function(promise) {
            return promise.then(success, error);
          }
        }
      ];

      $httpProvider.responseInterceptors.push(interceptor);

    }
  ])

.run(['$rootScope', '$location', 'AuthService',
  function($rootScope, $location, AuthService) {

    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // $rootScope.error = null;
      if (!AuthService.authorize(next.access)) {
        if (AuthService.isLoggedIn()) {
          $location.path('/');
        } else {
          $location.path('/login');
        }
      }
    });

  }
]);
