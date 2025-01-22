import { Component, EventEmitter, OnInit, Output, inject } from "@angular/core";
import { Router } from "@angular/router";
import { DressingProviderService } from "../../../services/dressingProvider.service";

 @Component({
    selector: 'selectpatient-component',
    templateUrl: '../../../templates/nurse/checkHealth/selectPatient/index.html',
    styleUrl: '../../../templates/nurse/checkHealth/selectPatient/styles.less',
})
export class SelectPatientComponent implements OnInit {

    private router: Router = inject(Router);
    constructor() { }

    ngOnInit(): void {
     }

     @Output("onSave")
     onSave: EventEmitter<any> = new EventEmitter<any>()

     @Output("onCancel")
     onCancel: EventEmitter<boolean> = new EventEmitter<boolean>()



    onFilter() {
     
    }

    onAdd() {
    
    }

     Cancel() {
         this.onCancel.emit(false);

    }

}