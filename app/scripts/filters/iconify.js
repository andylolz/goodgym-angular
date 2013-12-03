'use strict';

angular.module('goodgymApp')
  .filter('iconify', function() {
    return function(input) {
      var icon = input ? 'checkmark' : 'cross';
      return '<span class="ggicon icon-'+ icon +'"></span>';
    };
  });
