'use strict';

var app = angular.module('crud', [
    'ngRoute',
    'LocalStorageModule',
    'puigcerber.countryPicker'
])
    .config(function($routeProvider, pvpCountriesProvider) {
        $routeProvider
            .when('/contacts', {
                templateUrl: 'templates/crud-list.html',
                controller: 'contactsCtrl'
            })
            .when('/contact/new', {
                templateUrl: 'templates/crud-new.html',
                controller: 'contactsCtrl'
            })
            .when('/contact/:id/edit', {
                templateUrl: 'templates/crud-edit.html',
                controller: 'editCtrl'
            })
            .otherwise({
                redirectTo: '/contacts'
            });

        pvpCountriesProvider.setCountries([
            { name: 'Abkhazia', alpha2: 'AB'},
            { name: 'Kosovo', alpha2: 'XK'},
            { name: 'Nagorno-Karabakh', alpha2: 'NK'},
            { name: 'Northern Cyprus', alpha2: 'KK'},
            { name: 'Somaliland', alpha2: 'JS'},
            { name: 'South Ossetia', alpha2: 'XI'},
            { name: 'Transnistria', alpha2: 'PF'}
        ]);
    });
