'use strict';

// Have an element scroll to the passed in .class or #id on click.
angular.module('goodgymApp')
  .directive('scrollTo', ['$window',
    function ($window) {
      return {
        restrict: 'A',
        compile: function() {

          var document = $window.document;

          function scrollInto(idOrName) { //find element with the give id of name and scroll to the first element it finds
            if (!idOrName) {
              $window.scrollTo(0, 0);
            }
            //check if an element can be found with id attribute
            var el = document.getElementById(idOrName);
            if (!el) { //check if an element can be found with name attribute if there is no such id
              el = document.getElementsByName(idOrName);

              if (el && el.length) {
                el = el[0];
              } else {
                el = null;
              }
            }

            if (el) { //if an element is found, scroll to the element
              el.scrollIntoView();
              //otherwise, ignore
            }
          }

          return function(scope, element, attrs) {
            element.on('click', function() {
              scrollInto(attrs.scrollTo);
            });
          };
        }
      };
    }
  ]);
