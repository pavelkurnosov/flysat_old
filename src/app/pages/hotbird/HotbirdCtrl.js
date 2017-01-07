/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.hotbird')
        .controller('HotbirdCtrl', HotbirdCtrl);

    /** @ngInject */
    function HotbirdCtrl($scope, $rootScope) {
        $scope.data = {
            rows : [{
                txp: '110',
                src: 'Hendric',
                dte: '19.12.2016',
                pol: 'a',
                fec: 's',
                name: 'a',
                web: 'a',
                vpid: 'a',
                apid: 'a',
                sid: 'a',
                foot: 'a',
                comment: 'a'
            }, {
                txp: '110',
                src: 'Hendric',
                dte: '19.12.2016',
                pol: 'a',
                fec: 'a',
                name: 'a',
                web: 'a',
                vpid: 'a',
                apid: 'a',
                sid: 'a',
                foot: 'a',
                comment: 'a'
            }]
        }

        $rootScope.showSidebarMenuToggle = false;
    }
})();
