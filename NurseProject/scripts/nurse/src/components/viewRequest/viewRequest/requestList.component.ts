import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { RequestVM } from "./requestVM";
import { Data } from "@angular/router";
import { ViewRequestService } from "../../../services/viewRequest.service";





@Component({
    selector: "request-component",
    templateUrl: '../../../templates/nurse/viewRequest/requestList/index.html'
})

export class requestListComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private requestService: ViewRequestService = inject(ViewRequestService);

    constructor(
    ) { }

    mockData: Array<RequestVM> = []

    startDate: Date = new Date();
    endDate: Date = new Date();

    start: Date 
    end: Date 

    ngOnInit(): void {
        this.mockData = this.requestService.getViewRequest(); 
    }

    isShow = false
    showQuote() {
        this.isShow = true
    }

    closeQuote() {
        this.isShow = false
    }

    searchByDate() {
        this.start = this.startDate;
        this.end = this.endDate;

        console.log(this.start)
        console.log(this.end)
    }









    imageUrl: Array<string>=[];
    values: any
    onFileSelected(event: any) {

        for (let i=0; i < event.target.files.length; i++) {
            const file: File = event.target.files[i];
            if (file) {
                this.values.images.push(file);
                this.readFile(file).then(url => {
                    this.imageUrl.push(url);
                });
               
            }
        }
    }

    readFile(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result as string);
            };
            reader.onerror = () => {
                reject('Error reading file');
            };
            reader.readAsDataURL(file);
        });
    }

    removeImg(index: number) {
        if (index!=null) {
            if (this.values.images.length != 0) {
                this.values.images.splice(index, 1);
                this.imageUrl.splice(index, 1);
            }
        }
    }

}
