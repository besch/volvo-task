'use strict';

app.controller('editCtrl', ['$scope', 'storageService', '$location',
    function($scope, storageService, $location) {

    var contact_id = $location.url().split('/')[2];
    var contacts = storageService.getStorageEntries();
    var contact = contacts[contact_id];

    $scope.edit = {
        first : contact.first,
        last : contact.last,
        email : contact.email,
        country : contact.country
    };

    $scope.contactSave = function() {
        contacts[contact_id] = $scope.edit;
        storageService.setStorageEntries(contacts);
        $location.path('/contacts');
    };
}]);
