'use strict';

angular.module('angularGoodgymApp')
  .directive('responsive', function($rootScope) {
      // Runs during compile
      return {
          link: function($scope, iElm) {
              iElm.on('click', function(e) {
                  e.preventDefault;
                  $rootScope.showResponsiveMenu = !$rootScope.showResponsiveMenu;
                });
            }
        };
    });