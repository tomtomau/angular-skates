'use strict';
(function (window, angular) {
    angular.module('angular-skates', []).
        directive('skates', function () {
            return {
                restrict: 'A',
                scope: {
                    skates: '&skates'
                },
                link: function (scope, element) {
                    if (scope.skates !== 'undefined' && scope.hasOwnProperty('skates')) {
                        var styleVariable = scope.skates;

                        scope.$watch(styleVariable, function () {
                            var styleArray = [];

                            angular.forEach(styleVariable(), function (value, property) {
                                styleArray.push(property.toString() + ': ' + value.toString());

                            });

                            angular.forEach(element, function (thisElement) {
                                thisElement.setAttribute('style', styleArray.join('; ') + (styleArray.length ? ';' : ''));
                            });
                        });
                    }
                }
            };
        });
})(window, window.angular);
