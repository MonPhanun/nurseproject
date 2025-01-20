import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { DressingProviderService } from "../../../services/dressingProvider.service";
import { RegisterVM } from "../formRegister/registerVM";

export @Component({
    selector: 'dressing-component',
    templateUrl: '../../../templates/nurse/RegisterPatient/register/index.html',
    styleUrl: '../../../templates/nurse/RegisterPatient/register/styles.less',
})
class RegisterComponent implements OnInit {

    private router: Router = inject(Router);
    private dressingService: DressingProviderService = inject(DressingProviderService);
    isFilter = false;
    isAdd = false;
    constructor() { }

    ngOnInit(): void {
    }

    dressingData: Array<RegisterVM> = new Array<RegisterVM>()


    onSave(data: RegisterVM) {
        if (data.isValid()) {
            this.dressingData.push(data)
            this.dressingService.createDressing(data);
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