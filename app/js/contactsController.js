'use strict';

app.controller('contactsCtrl', ['$scope', 'storageService', '$location',
    function($scope, storageService, $location) {

    $scope.contacts = storageService.getStorageEntries();

    $scope.contactCreate = function() {
        $scope.contacts.push({
            first: $scope.new.first,
            last: $scope.new.last,
            email: $scope.new.email,
            country: $scope.new.country
        });

        storageService.setStorageEntries($scope.contacts);
        $location.path('/contacts');
    };

    $scope.contactDelete = function(id) {
        $scope.contacts.splice(id, 1);
        storageService.setStorageEntries($scope.contacts);
    };

    $scope.cancelContact = function() {
        $location.path('/contacts');
    }

    $scope.deleteAll = function() {
        storageService.deleteAll();
        $scope.contacts = [];
    };

}]);
