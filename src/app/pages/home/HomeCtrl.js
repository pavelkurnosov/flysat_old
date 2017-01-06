/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.home')
        .controller('HomeCtrl', HomeCtrl);

    /** @ngInject */
    function HomeCtrl($scope) {
        $scope.data = {
            updates: [{
                title: 'Channels Update for 06.01.2017',
                items: [
                    {name: 'World Travel Channel', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A @ 42° East', band: '', package: '', note: 'C Band', state: 'left'},
                    {name: 'Plus M', action: '', frequency: '(12303 V)', satellite: ' Hispasat 30W-5 @ 30° West', band: '', package: '', note: 'D Band', state: 'on'},
                    {name: 'Hazan TV', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A', band: '', package: 'NC+', note: 'Orange, Polsat', state: 'on'},
                    {name: 'Dolunay Int', action: '', frequency: '(11558 V)', satellite: ' SES-6 @ 40.5° West', band: '', package: 'NC+', note: 'Orange, Polsat', state: 'return'},
                    {name: 'Nurs', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A', band: '', package: '', note: 'D Band', state: 'on'},
                    {name: 'Maya TV', action: '', frequency: '(11558 V)', satellite: ' SES-6 @ 40.5° West', band: '', package: '', note: 'C Band', state: 'return'}
                ]
            }, {
                title: 'Channels Update for 05.01.2017',
                items: [
                    {name: 'Ber TV', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A', band: '', package: '', note: 'C Band', state: 'on'},
                    {name: 'Shopping Channel', action: '', frequency: '(11558 V)', satellite: 'Hispasat 30W-5 @ 30° West', band: '', package: '', note: 'D Band', state: 'on'},
                    {name: 'Medya TV', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A', band: '', package: '', note: 'D Band', state: 'left'},
                    {name: 'TV A', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A', band: '', package: '', note: 'Orange, Polsat', state: 'return'},
                    {name: 'Anadolu Kaplanları', action: '', frequency: '(11558 V)', satellite: 'Türksat 3A', band: 'KU', package: 'Orange Polsat', note: '', state: 'left'},
                    {name: 'Kultura Ukraine', action: '', frequency: '(12341 V)', satellite: 'Türksat 3A', band: 'KU', package: '', note: 'C Band', state: 'on'}
                ]
            }]
        }
    }
})();
