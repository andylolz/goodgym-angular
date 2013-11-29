'use strict';

angular.module('angularGoodgymApp')
  .directive('buttonLoading', function() {
    return {
      restrict: 'A',
      terminal: true,
      link: function($scope, element, attrs) {
        $scope.$watch('loading', function() {
          var loadingIcon = '<span class="progress"></span>';
          if ($scope.loading === true) {
            element.prepend(loadingIcon);
          } else {
            element.children().remove();
          }
        }, true);
      }
    };
  });
