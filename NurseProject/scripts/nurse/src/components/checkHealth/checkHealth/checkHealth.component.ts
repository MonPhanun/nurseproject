import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { CheckHealthVM } from "../formCheckHealth/checkHealthVM";

export @Component({
    selector: 'checkhealth-component',
    templateUrl: '../../../templates/nurse/checkHealth/checkHealth/index.html',
    styleUrl: '../../../templates/nurse/checkHealth/checkHealth/styles.less'
})
class CheckHealthComponent implements OnInit {
    private router: Router = inject(Router);
    isFilter = false;
    isAdd = false;
    constructor() { }

    ngOnInit(): void {
    }

    checkHealth: Array<CheckHealthVM> = new Array<CheckHealthVM>()


    onSave(data: CheckHealthVM) {
        if (data.isValid()) {
            this.checkHealth.push(data)
            this.router.navigate(['/home/request'])
        }
    }

    onFilter() {
        this.isFilter = !this.isFilter;
    }

    onAdd() {
        this.isAdd = true;
    }

    onCancel(cancel: boolean) {
        this.isAdd = cancel

    }
}