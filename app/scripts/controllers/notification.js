'use strict';

angular.module('angularGoodgymApp')
  .controller('NotificationCtrl', function ($scope, NotificationService) {

  	$scope.feedback = NotificationService.alert;
  	console.log('from NotificationCtrl');
  	console.log($scope.feedback);
  });