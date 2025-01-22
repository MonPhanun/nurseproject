import { Component, EventEmitter, OnInit, Output, inject } from "@angular/core";
import { Router } from "@angular/router";

 @Component({
    selector: 'selectpatient-component',
     templateUrl: '../../../templates/nurse/medicalRecord/patientRecord/index.html',
     styleUrl: '../../../templates/nurse/medicalRecord/patientRecord/styles.less',
})
export class PatientRecordComponent implements OnInit {

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