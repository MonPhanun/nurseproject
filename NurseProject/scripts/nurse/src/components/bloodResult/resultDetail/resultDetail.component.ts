import { Component, EventEmitter, OnInit, Output, inject } from "@angular/core";
import { Router } from "@angular/router";
import { DressingProviderService } from "../../../services/dressingProvider.service";

 @Component({
    selector: 'result-component',
    templateUrl: '../../../templates/nurse/bloodResult/resultDetail/index.html',
     styleUrl: '../../../templates/nurse/bloodResult/resultDetail/styles.less',
})
export class resultDetailComponent implements OnInit {

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