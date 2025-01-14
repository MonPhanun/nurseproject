import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProviderComponent } from './provider.component';

describe('ProviderComponent', () => {
    let component: ProviderComponent;
    let fixture: ComponentFixture<ProviderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProviderComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(ProviderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it("Save should be call ", () => {
        var component = fixture.componentInstance;
        var cancel = spyOn(component, "onSave");
        var event
        component.onSave(event);
        fixture.detectChanges()

        expect(cancel).toHaveBeenCalled();
        expect(component.providerData.length).toEqual(0)
    })



});
