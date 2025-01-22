﻿import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { CheckHealthVM } from "./checkHealthVM";
import { Router } from "@angular/router";



@Component({
    selector: "healthform-component",
    templateUrl: '../../../templates/nurse/checkHealth/formcheckHealth/index.html',
    styleUrl: '../../../templates/nurse/checkHealth/formcheckHealth/styles.less'
})

export class FormCheckHealthComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private router: Router = inject(Router);


    constructor(
    ) { }

    ngOnInit(): void {

    }

    oldValue: CheckHealthVM = new CheckHealthVM()
    values: CheckHealthVM = new CheckHealthVM()

 
    mockImage: Array<string> = []

    errMsItem = '';
    errMsDFS = '';
    isEditItem = false

    search: string = ''

    @Output("onSave")
    onSave: EventEmitter<CheckHealthVM> = new EventEmitter<CheckHealthVM>()

    @Output("onCancel")
    onCancel: EventEmitter<boolean> = new EventEmitter<boolean>()

    Save() {
    
    }

    editItem() {

     
    }

    onClose() {
        this.onCancel.emit(false);
    }



    imgSeleted: string = '';
    selectImg(url: string) {
        var oldItem = new String();
        oldItem = url;
        this.imgSeleted = oldItem.toString();
    }

    Validator() {

      
    }

}
