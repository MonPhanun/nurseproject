//import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { By } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
//import { emRegisterComponent } from './emRegister.component';

//describe('ForrmSetupProductComponent', () => {
//    let component: emRegisterComponent;
//    let fixture: ComponentFixture<emRegisterComponent>;

//    beforeEach(() => {
//        TestBed.configureTestingModule({
//            declarations: [emRegisterComponent],
//            imports: [
//                FormsModule,
//                ReactiveFormsModule,
//                HttpClientModule,
//                ToastrModule.forRoot(),
//            ],
//            schemas: [CUSTOM_ELEMENTS_SCHEMA]
//        });
//        fixture = TestBed.createComponent(emRegisterComponent);
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

//        var btn = fixture.debugElement.query(By.css('.saves'));
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

//        component.values.name = 'name';
//        component.values.size = 'XXL';
//        component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeTrue();
//        expect(component.Validator()).toBeTrue();
//    })

//    it("Value should be emty name", () => {

//        let component = fixture.componentInstance;

//        component.values.name = '';
//        component.values.size = 'XXL';
//        component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];


//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it("Value should be emty size", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'name';
//        component.values.size = '';
//        component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];


//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it("Value should be emty color", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'name';
//        component.values.size = 'XXL';
//       // component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];


//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it("Value should be emty image", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'name';
//        component.values.size = 'XXL';
//        component.values.color = ['red', 'yellow'];
//       // component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];


//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it('Label should be not error', () => {
//        let component = fixture.componentInstance;

//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
//        let TextSize: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-size');
//        let TextColor: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-color');
//        let TextImage: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-image');
//        fixture.detectChanges();

//        expect(TextName.innerHTML.trim()).toBe('no message');
//        expect(TextSize.innerHTML.trim()).toBe('no message');
//        expect(TextColor.innerHTML.trim()).toBe('no message');
//        expect(TextImage.innerHTML.trim()).toBe('no message');

//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = '';
//        component.values.size = 'XXL';
//        component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];

//        fixture.detectChanges()
//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
//        var btn = fixture.debugElement.query(By.css('.saves'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextName.innerHTML.trim()).toBe("Name is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.size = '';
//        component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];

//        fixture.detectChanges()
//        let TextSize: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-size');
//        var btn = fixture.debugElement.query(By.css('.saves'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextSize.innerHTML.trim()).toBe("Size is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.size = 'XXL';
//       // component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];

//        fixture.detectChanges()
//        let TextSize: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-color');
//        var btn = fixture.debugElement.query(By.css('.saves'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextSize.innerHTML.trim()).toBe("Color is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.size = 'XXL';
//        component.values.color = ['red', 'yellow'];
//        //component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];

//        fixture.detectChanges()
//        let TextImage: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-image');
//        var btn = fixture.debugElement.query(By.css('.saves'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextImage.innerHTML.trim()).toBe("Image is required !");
//    })

//    it("Label type should be show error Invalid name .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name@#$';
//        component.values.size = 'XXL';
//        component.values.color = ['red', 'yellow'];
//        component.values.images = [createMockImageFile('mock-image.jpg', 'image/jpeg')];

//        fixture.detectChanges()
//        let TextImage: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
//        var btn = fixture.debugElement.query(By.css('.saves'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextImage.innerHTML.trim()).toBe("Invalid name !");
//    })


//});

//function createMockImageFile(name: string, type: string): File {
//    const content = new Uint8Array([0x00, 0x01, 0x02, 0x03]); // Mock image content
//    const blob = new Blob([content], { type });
//    const file = new File([blob], name, { type });

//    return file;
//}
