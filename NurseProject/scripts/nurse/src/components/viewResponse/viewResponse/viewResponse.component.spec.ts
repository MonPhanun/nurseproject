//import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { By } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
//import { sizeSetupComponent } from './sizeSetup.component';

//describe('FormSizeComponent', () => {
//    let component: sizeSetupComponent;
//    let fixture: ComponentFixture<sizeSetupComponent>;

//    beforeEach(() => {
//        TestBed.configureTestingModule({
//            declarations: [sizeSetupComponent],
//            imports: [
//                FormsModule,
//                ReactiveFormsModule,
//                HttpClientModule,
//                ToastrModule.forRoot(),
//            ],
//            schemas: [CUSTOM_ELEMENTS_SCHEMA]
//        });
//        fixture = TestBed.createComponent(sizeSetupComponent);
//        component = fixture.componentInstance;
//        fixture.detectChanges();
//    });

//    it('should create', () => {
//        expect(component).toBeTruthy();
//    });

//    it("Variable should be", () => {
//        let component = fixture.componentInstance;
//        fixture.detectChanges();

//        expect(component.isEdit).toBeTrue();

//    })

//    it("Save should be call", () => {
//        let component = fixture.componentInstance;
//        component.isEdit = false
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.save'));
//        var Save = spyOn(component, "Save");
//        btn.triggerEventHandler('click', {})

//        expect(Save).toHaveBeenCalled();
//    })

//    it("Savechange should be call", () => {
//        let component = fixture.componentInstance;
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.chang'));
//        var Save = spyOn(component, "SaveChange");
//        btn.triggerEventHandler('click', {})

//        expect(Save).toHaveBeenCalled();
//    })

//    it("cancel form should be call", () => {
//        let component = fixture.componentInstance;
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.cancel'));
//        var cancel = spyOn(component, "Cancel");
//        btn.triggerEventHandler('click', {})

//        expect(cancel).toHaveBeenCalled();
//    })

//    it("Value should be valid", () => {

//        let component = fixture.componentInstance;

//        component.values.size = 'XL';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeTrue();
//        expect(component.Validator()).toBeTrue();
//    })

//    it("Value should be emty name", () => {

//        let component = fixture.componentInstance;

//        component.values.size = '';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })


//    it('Label should be not error', () => {
//        let component = fixture.componentInstance;

//        let TextColor: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-size');

//        fixture.detectChanges();

//        expect(TextColor.innerHTML.trim()).toBe('no message');

//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.size = '';

//        fixture.detectChanges()
//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-size');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextName.innerHTML.trim()).toBe("Size is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.size = 'sdf3#2';

//        fixture.detectChanges()
//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-size');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextName.innerHTML.trim()).toBe("Invalid size !");
//    })

//});
