import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { CheckHealthVM } from "../formMedical/checkHealthVM";

export @Component({
    selector: 'medical-component',
    templateUrl: '../../../templates/nurse/medicalRecord/medicalRecord/index.html',
    styleUrl: '../../../templates/nurse/medicalRecord/medicalRecord/styles.less'
})
class MedicalRecordComponent implements OnInit {
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