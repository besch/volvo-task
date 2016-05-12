'use strict';

app.factory('storageService', ['localStorageService', function(localStorageService) {
    return {
        getStorageEntries: function () { return localStorageService.get('contacts') || []; },
        setStorageEntries: function (entries) { return localStorageService.set('contacts', entries)},
        deleteAll: function() { return localStorageService.set('contacts', [])}
    };
}]);
