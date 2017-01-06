/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('BaSidebarCtrl', BaSidebarCtrl);

    /** @ngInject */
    function BaSidebarCtrl($scope, baSidebarService) {

        // $scope.menuItems = baSidebarService.getMenuItems();
        // console.log($scope.menuItems)
        $scope.menuItems = [{
            icon: "ion-android-home",
            level: 0,
            name: "english_menu",
            order: 0,
            stateRef: "english_menu",
            subMenu: [
                {level: 1, name: "english_menu1", order: 0, stateRef: "english_menu", subMenu: null, title: "Add To Your Site"},
                {level: 1, name: "english_menu2", order: 0, stateRef: "english_menu", subMenu: null, title: "FTA TV"},
                {level: 1, name: "english_menu3", order: 0, stateRef: "english_menu", subMenu: null, title: "Temporary FTA TV"},
                {level: 1, name: "english_menu4", order: 0, stateRef: "english_menu", subMenu: null, title: "Live TV Turkish"},
                {level: 1, name: "english_menu5", order: 0, stateRef: "english_menu", subMenu: null, title: "HD TV"},
                {level: 1, name: "english_menu6", order: 0, stateRef: "english_menu", subMenu: null, title: "3D TV"},
                {level: 1, name: "english_menu7", order: 0, stateRef: "english_menu", subMenu: null, title: "UHD TV"},
                {level: 1, name: "english_menu8", order: 0, stateRef: "english_menu", subMenu: null, title: "Track"},
                {level: 1, name: "english_menu9", order: 0, stateRef: "english_menu", subMenu: null, title: "Sat Info"},
                {level: 1, name: "english_menu10", order: 0, stateRef: "english_menu", subMenu: null, title: "Antenna Diameter"},
                {level: 1, name: "english_menu11", order: 0, stateRef: "english_menu", subMenu: null, title: "Receiver Codes"},
                {level: 1, name: "english_menu12", order: 0, stateRef: "english_menu", subMenu: null, title: "Send Frequency"},
                {level: 1, name: "english_menu13", order: 0, stateRef: "english_menu", subMenu: null, title: "Official Links"},
                {level: 1, name: "english_menu14", order: 0, stateRef: "english_menu", subMenu: null, title: "History of Sat"},
                {level: 1, name: "english_menu15", order: 0, stateRef: "english_menu", subMenu: null, title: "View from Sat"},
                {level: 1, name: "english_menu16", order: 0, stateRef: "english_menu", subMenu: null, title: "Links"},
                {level: 1, name: "english_menu17", order: 0, stateRef: "english_menu", subMenu: null, title: "Contact"}
            ],
            title: "MENU"
        }, {
            icon: "ion-grid",
            level: 0,
            name: "recommended_sites",
            order: 0,
            stateRef: "recommended_sites",
            subMenu: [
                {level: 1, name: "recommended_sites1", order: 0, stateRef: "recommended_sites", subMenu: null, title: "tvnews365.com"},
                {level: 1, name: "recommended_sites2", order: 0, stateRef: "recommended_sites", subMenu: null, title: "Kiralik vinc atasehir"},
                {level: 1, name: "recommended_sites3", order: 0, stateRef: "recommended_sites", subMenu: null, title: "Kadikoy Vinc"},
                {level: 1, name: "recommended_sites4", order: 0, stateRef: "recommended_sites", subMenu: null, title: "kiralik vincler"},
                {level: 1, name: "recommended_sites5", order: 0, stateRef: "recommended_sites", subMenu: null, title: "192.168.1.1"},
                {level: 1, name: "recommended_sites6", order: 0, stateRef: "recommended_sites", subMenu: null, title: "kredi karti"}
            ],
            title: "Recommended Sites"
        }]
        $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

        $scope.hoverItem = function ($event) {
            $scope.showHoverElem = true;
            $scope.hoverElemHeight = $event.currentTarget.clientHeight;
            var menuTopValue = 66;
            $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
        };

        $scope.$on('$stateChangeSuccess', function () {
            if (baSidebarService.canSidebarBeHidden()) {
                baSidebarService.setMenuCollapsed(true);
            }
        });
    }
})();