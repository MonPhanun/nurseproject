import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { ResponseService } from "../../../services/viewResponse.service";
import { responseVM } from "./responseVM";

@Component({
    selector: "viewresp-component",
    templateUrl: '../../../templates/nurse/viewResponse/viewResponse/index.html'
})

export class ViewResponseComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private responseService: ResponseService = inject(ResponseService);


    page: number = 1;
    count: number = 0;
    tableSize: number = 10;
    tableSizes: any = [3, 6, 9, 12];


    constructor(
    ) { }

    mockData: responseVM = new responseVM();

    ngOnInit(): void {
        this.mockData = this.responseService.getResponse();

    }

    isShow = false
    showRejectReason() {
        this.isShow = true
    }

    closeRejectReason() {
        this.isShow = false
    }

    errMsSize = '';

    Validator() {

        //this.errMsSize = this.validator.ValidateStringNumberLength(this.values.size,30, "Size is required !", "Invalid size !","Size is too long !");

        return this.errMsSize == '';
    }

    onTableDataChange(event: any) {
        this.page = event;
    }

    onTableSizeChange(event: any): void {
        this.tableSize = event.target.value;
        this.page = 1;
    }

}
