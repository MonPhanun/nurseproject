//import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { By } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
//import { EmRegisterComponent } from './EmRegister.component';

//describe('SetupNameComponent', () => {
//    let component: EmRegisterComponent;
//    let fixture: ComponentFixture<EmRegisterComponent>;

//    beforeEach(() => {
//        TestBed.configureTestingModule({
//            declarations: [EmRegisterComponent],
//            imports: [
//                FormsModule,
//                ReactiveFormsModule,
//                HttpClientModule,
//            ],
//            schemas: [CUSTOM_ELEMENTS_SCHEMA]
//        });
//        fixture = TestBed.createComponent(EmRegisterComponent);
//        component = fixture.componentInstance;
//        fixture.detectChanges();
//    });

//    it('should create', () => {
//        expect(component).toBeTruthy();
//    });

//    it("onSave should be call ", () => {
//        var component = fixture.componentInstance;
//        var onSave = spyOn(component, "onSave");
//        var event
//        component.onSave(event);
//        fixture.detectChanges()

//        expect(onSave).toHaveBeenCalled();
//        expect(component.ProductData.length).toBeGreaterThan(0)
//    })

//    it("onEdit should be call", () => {
//        var component = fixture.componentInstance;
//        var onEdit = spyOn(component, "onSaveChange");
//        var event
//        component.onSaveChange(event)
//        fixture.detectChanges()

//        expect(onEdit).toHaveBeenCalled();
//        expect(component.ProductData.length).toBeGreaterThan(0)
//    })

//    it("Cancel should be call ", () => {
//        var component = fixture.componentInstance;
//        var cancel = spyOn(component, "Cancel");
//        var event
//        component.Cancel(event);
//        fixture.detectChanges()

//        expect(cancel).toHaveBeenCalled();
//        expect(component.ProductData.length).toBeGreaterThan(0)
//    })

//    it("Add meal should be call ", () => {
//        let component = fixture.componentInstance;
//        var btn = fixture.debugElement.query(By.css('.addproduct'));
//        var add = spyOn(component, "AddName");

//        btn.triggerEventHandler("click", {})

//        fixture.detectChanges()

//        expect(add).toHaveBeenCalled();
//    })


//    it("Ok Delete should be call ", () => {
//        let component = fixture.componentInstance;
//        component.confirmDelete = true;
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.btn-delete'));
//        var deletes = spyOn(component, "onDelete");

//        btn.triggerEventHandler("click", {})

//        fixture.detectChanges()

//        expect(deletes).toHaveBeenCalled();
//    })

//    it("Cancel Delete should be call ", () => {
//        let component = fixture.componentInstance;
//        component.confirmDelete = true;
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.btn-cancel'));
//        var cancel = spyOn(component, "cancelDelete");

//        btn.triggerEventHandler("click", {})

//        fixture.detectChanges()

//        expect(cancel).toHaveBeenCalled();
//    })

//    it("Edit should be call ", () => {
//        var component = fixture.componentInstance;
//        var edit = spyOn(component, "edit");
//        var event
//        component.edit(event);
//        fixture.detectChanges()

//        expect(edit).toHaveBeenCalled();
//    })

//    it("getDateToDelete should be call ", () => {
//        var component = fixture.componentInstance;
//        var get = spyOn(component, "getDateToDelete");
//        var event
//        component.getDateToDelete(event);
//        fixture.detectChanges()

//        expect(get).toHaveBeenCalled();
//    })

//});
