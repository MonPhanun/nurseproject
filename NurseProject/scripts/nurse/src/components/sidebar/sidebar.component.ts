﻿import { Component } from "@angular/core";

@Component({
    selector: 'sidebar-component',
    templateUrl: '../../templates/nurse/sidebar/index.html',
})
export class sidebarComponent {

    subItem = false;

    ShowITem() {
        this.subItem = !this.subItem;
    }
}