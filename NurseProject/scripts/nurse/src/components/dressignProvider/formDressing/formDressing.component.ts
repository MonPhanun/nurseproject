import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { Item, dressingVM, Image } from "./dressingVM";
import { Router } from "@angular/router";
import { DressingProviderService } from "../../../services/dressingProvider.service";



@Component({
    selector: "colorform-component",
    templateUrl: '../../../templates/nurse/dressingProvider/formDressing/index.html'
})

export class FormDressingComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private router: Router = inject(Router);
    private dressingService: DressingProviderService = inject(DressingProviderService);


    constructor(
    ) { }

    ngOnInit(): void {
        this.mockItem = this.dressingService.getItem();
    }

    oldValue: dressingVM = new dressingVM()
    values: dressingVM = new dressingVM()

    oldItem: Item = new Item()
    Item: Item = new Item();

    mockItem: Array<Image> = []
    mockImage: Array<string> = []

    errMsItem = '';
    errMsDFS = '';
    isEditItem = false

    search:string=''

    @Output("onSave")
    onSave: EventEmitter<dressingVM> = new EventEmitter<dressingVM>()

    Save() {
        if (this.Validator() && this.values.isValid()) {
            this.onSave.emit(this.values);
        } else {
            // this.toast.error('Invalid input !', 'Error', { closeButton: true, });
        }
    }

    editItem() {

        if (this.oldItem.isValid()) {
            var value = new Item();
            value.copy(this.Item)
            this.values.item = this.values.item.map(e => e == this.oldItem ? value : e);
        }
        this.clear();
        this.isEditItem = false
    }
    
    getValEdit(value: Item) {
        this.oldItem = value;
        var val = new Item();
        val.copy(value);
        this.Item.copy(val);
        this.isEditItem = true
    }

    addItem() {
        this.Item.image = this.imgSeleted ;
        if (this.Item.isValid()) {

            var value = new Item();
            value.copy(this.Item)
            this.values.item.push(value);

            this.imgSeleted = '';

        }
        this.clear();
    }

    clear() {
        this.Item.image = '';
        this.Item.item = '';
        this.Item.quantity = '';
    }

    deleteItem(item: Item) {
        if (item.isValid()) {
            this.values.item = this.values.item.filter(e => e != item)
        }
    }

    trigerImage(data: any) {
        this.mockItem.map(e => {
            if (e.color.trim() == data.target.value.trim()) {
                this.mockImage = e.image;
            }
        })

    }

    imgSeleted: string = '';
    selectImg(url: string) {
        var oldItem = new String();
        oldItem = url;
        this.imgSeleted = oldItem.toString();
    }

    Validator() {

        this.errMsDFS = this.validator.ValidateDateTimeEmty(this.values.DFS, "Date of service is required !");
        if (this.values.item.length == 0) {
            this.errMsItem = "Item is required !"
        } else {
            this.errMsItem = "";
        }
        return this.errMsDFS == '' && 
            this.errMsItem == '';
    }

}
