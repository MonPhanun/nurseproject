import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

export @Component({
    selector: 'checkhealth-component',
    templateUrl: '../../../templates/nurse/bloodResult/bloodResult/index.html',
    styleUrl: '../../../templates/nurse/bloodResult/bloodResult/styles.less'
})
class BloodResultComponent implements OnInit {
    private router: Router = inject(Router);
    isFilter = false;
    isAdd = false;
    constructor() { }

    ngOnInit(): void {
    }



    onSave() {

        
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