import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormDressingComponent } from './formDressing.component';
import { Item } from './dressingVM';

describe('FormSizeComponent', () => {
    let component: FormDressingComponent;
    let fixture: ComponentFixture<FormDressingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormDressingComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                ToastrModule.forRoot(),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(FormDressingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it("Save should be call", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges()

        var btn = fixture.debugElement.query(By.css('.save'));
        var Save = spyOn(component, "Save");
        btn.triggerEventHandler('click', {})

        expect(Save).toHaveBeenCalled();
    })


    it("add Item should be call", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges()

        var btn = fixture.debugElement.query(By.css('.additem'));
        var add = spyOn(component, "addItem");
        btn.triggerEventHandler('click', {})

        expect(add).toHaveBeenCalled();
    })

    it("Value should be valid", () => {

        let component = fixture.componentInstance;

        component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity:"123" } as Item
        component.values.item = [item]

        fixture.detectChanges()

        expect(component.values.isValid()).toBeTrue();
        expect(component.Validator()).toBeTrue();
    })

    it("Value should be invalid", () => {

        let component = fixture.componentInstance;

        //component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" } as Item
        component.values.item = [item]

        fixture.detectChanges()

        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    })


    it("Value should be invalid", () => {

        let component = fixture.componentInstance;

        component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" } as Item
        component.values.item = []

        fixture.detectChanges()

        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    })


    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;

       // component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" } as Item
        component.values.item = [item]

        let TextDate: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-date');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextDate.innerHTML.trim()).toBe("Date of service is required !");
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;

         component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" } as Item
        component.values.item = []

        let TextDate: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-item');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextDate.innerHTML.trim()).toBe("Item is required !");
    })


});
