import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard-render', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: '/user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: '/mysensors', title: 'My Sensors',  icon:'ti-tablet', class: '' },
    { path: '/add-sensor', title: 'Add Sensor',  icon:'ti-view-list-alt', class: '' },
    { path: '/add-gateway', title: 'Add Gateway',  icon:'ti-view-list-alt', class: '' },
    { path: '/set-alarm', title: 'Set Alarm',  icon:'ti-bell', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
