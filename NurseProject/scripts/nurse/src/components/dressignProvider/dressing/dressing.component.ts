import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { dressingVM } from "../formDressing/dressingVM";
import { DressingProviderService } from "../../../services/dressingProvider.service";

export @Component({
    selector: 'dressing-component',
    templateUrl: '../../../templates/nurse/dressingProvider/dressing/index.html',
})
class DressingComponent implements OnInit {

    private router: Router = inject(Router);
    private dressingService: DressingProviderService = inject(DressingProviderService);

    constructor() { }

    ngOnInit(): void {
    }

    dressingData: Array<dressingVM> = new Array<dressingVM>()


    onSave(data: dressingVM) {
        if (data.isValid()) {
            this.dressingData.push(data)
            this.dressingService.createDressing(data);
            this.router.navigate(['/home/request'])
        }
    }

}