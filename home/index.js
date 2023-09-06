import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule
  .directive('accordion', [
    function () {
      return {
        restrict: 'E',
        controller: function ($scope) {
          $scope.showBody = false;
          $scope.toggleBodyDisplay = function () {
            $scope.showBody = !$scope.showBody;
          };
        },
        transclude: {
          header: 'accordionHeader',
          body: 'accordionBody',
        },
        template:
          '<div ng-transclude="header" ng-click="toggleBodyDisplay()"></div> <div ng-show="showBody" ng-transclude="body" ><div>',
      };
    },
  ])
  .directive('accordionHeader', [
    function () {
      return {
        restrict: 'E',
        transclude: true,
        require: '^',
        template: '<h1 ng-transclude></h1>',
      };
    },
  ])
  .directive('accordionBody', [
    function () {
      return {
        restrict: 'E',
        transclude: true,
        link: function ($scope) {},
        template: '<span ng-transclude></span>',
      };
    },
  ]);
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;
