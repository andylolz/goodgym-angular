'use strict';

describe('Controller: RundetailCtrl', function () {

  // load the controller's module
  beforeEach(module('goodgymApp'));

  var RundetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RundetailCtrl = $controller('RundetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
