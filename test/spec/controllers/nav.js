'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('goodgymApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of nav elements to the scope', function () {
    expect(scope.nav.length).toBe(5);
  });
});
