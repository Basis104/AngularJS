(function () {
  angular.module('app', []);
})();

(function () {
  var MyService = function (a, b) {
    return a * b;
  };
  angular.module('app').value('addService', MyService);
})();
(function () {
    var MyController = function ($scope, addService) {
      $scope.x = addService(12, 34);
      $scope.myFunction = function () {
	    $scope.x = Number($scope.labelx) + Number($scope.labely);
	};
    };
    angular.module('app').controller('myController', MyController);
})();


