import { Component } from "@angular/core";

@Component({
    selector: 'layout-component',
    templateUrl: '../../templates/nurse/layout/index.html',
    styleUrl:"../../templates/nurse/layout/styles.less"
})

export class layoutComponent {

    colapesSidebar = true;

    colapes(clp: boolean) {
        console.log("chil")
        this.colapesSidebar = clp;
    }
}