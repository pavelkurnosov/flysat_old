/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.hotbird', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('hotbird', {
                url: '/hotbird',
                controller : "HotbirdCtrl",
                templateUrl: 'app/pages/hotbird/hotbird.html',
                title: 'Home',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();
