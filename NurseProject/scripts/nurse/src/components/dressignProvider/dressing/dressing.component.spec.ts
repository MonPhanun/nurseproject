import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DressingComponent } from './dressing.component';

describe('SetupColorComponent', () => {
    let component: DressingComponent;
    let fixture: ComponentFixture<DressingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DressingComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(DressingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("onSave should be call ", () => {
        var component = fixture.componentInstance;
        var onSave = spyOn(component, "onSave");
        var event
        component.onSave(event);
        fixture.detectChanges()

        expect(onSave).toHaveBeenCalled();
        expect(component.dressingData.length).toEqual(0)
    })


});
