import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

export @Component({
    selector: 'response-component',
    templateUrl: '../../../templates/nurse/viewResponse/response/index.html',
})
class ResponseComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }


    print() {
 
        window.print();
        
    }
 
}