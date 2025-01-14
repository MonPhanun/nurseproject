import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { providerComponent } from './formProvider.component';

describe('ChoiceProviderComponent', () => {
    let component: providerComponent;
    let fixture: ComponentFixture<providerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [providerComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                ToastrModule.forRoot(),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(providerComponent);
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

    it("cancel form should be call", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges()

        var btn = fixture.debugElement.query(By.css('.cancel'));
        var cancel = spyOn(component, "Cancel");
        btn.triggerEventHandler('click', {})

        expect(cancel).toHaveBeenCalled();
    })

    it("Value should be valid", () => {

        let component = fixture.componentInstance;

        component.values.supplier = 'name';
        component.values.location = 'location';

        fixture.detectChanges()

        expect(component.values.isValid()).toBeTrue();
        expect(component.Validator()).toBeTrue();
    })

    it("Value should be Invalid", () => {

        let component = fixture.componentInstance;

        component.values.supplier = '';
        component.values.location = 'location';

        fixture.detectChanges()

        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    })

    it("Value should be Invalid", () => {

        let component = fixture.componentInstance;

        component.values.supplier = 'name';
        component.values.location = '';

        fixture.detectChanges()

        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    })


    it('Label should be not error', () => {
        let component = fixture.componentInstance;

        let TextSupplier: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-suplier');
        let TextLocation: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-location');
        fixture.detectChanges();

        expect(TextSupplier.innerHTML.trim()).toBe('no message');
        expect(TextLocation.innerHTML.trim()).toBe('no message');

    })

    it('Label should be not error', () => {
        let component = fixture.componentInstance;

        let TextSupplier: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-suplier');
        let TextLocation: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-location');
        fixture.detectChanges();

        expect(TextSupplier.innerHTML.trim()).toBe('no message');
        expect(TextLocation.innerHTML.trim()).toBe('no message');

    })

    it("Label type should be show error required .", () => {

        let component = fixture.componentInstance;

        component.values.supplier = '';
        component.values.location = 'location';

        fixture.detectChanges()
        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-suplier');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextName.innerHTML.trim()).toBe("Supplier is required !");
    })

    it("Label type should be show error required .", () => {

        let component = fixture.componentInstance;

        component.values.supplier = 'suplier';
        component.values.location = '';

        fixture.detectChanges()
        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-location');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextName.innerHTML.trim()).toBe("Location is required !");
    })

});
