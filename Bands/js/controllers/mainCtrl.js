angular.module('mainController',[])

  .controller('mainCtrl', function ($scope, db) {
      $scope.bands = [];
      $scope.activeBand = {};

      db.getBands().then(function (res) {
        $scope.bands = res.data;
      });
      $scope.setActiveBand = function (band) {
        $scope.activeBand = band;
        console.log("radi");
      }
  })
