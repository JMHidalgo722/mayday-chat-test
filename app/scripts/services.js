'use strict';

var urlService = angular.module('urlService', []);
var httpService = angular.module('httpService', [])

urlService.service('urlService', function ($window) {
    //this.baseURL = 'http://localhost/f-dtr-payroll/#/';
    this.apiURL = 'http://localhost/mayday-chat-api/'

    /*this.goto = function (url) {
        $window.location.href = url;
    }*/
});


httpService.service('httpService', function ($http) {

    this.get = function (url) {
        return $http.get(url);
    }

    this.post = function (url, data) {
        return jQuery.ajax({
            type: 'POST',
            url: url,
            data: { data: data }
        });
    }
});