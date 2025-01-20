import { Component } from "@angular/core";

@Component({
    selector: 'sidebar-component',
    templateUrl: '../../templates/nurse/sidebar/index.html',
    styleUrl: '../../templates/nurse/sidebar/styles.less',
})
export class sidebarComponent {

    subItem = false;
    sideBar = 0;

    ShowITem() {
        this.subItem = !this.subItem;
    }

    sidebarClick(num: number) {
        if (this.sideBar != num) {
            this.sideBar = num;
        } else {
            this.sideBar = 0;
;        }
        console.log(num)
    }
}