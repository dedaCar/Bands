angular.module('dbServices',[])

  .factory('db',function ($http) {
    var obj = {};
    obj.getBands = function () {
      return  $http({
          method : "Get",
          url : "https://raw.githubusercontent.com/Danilovesovic/bands/master/bands.json"
        })
    }

    return obj;
  })
