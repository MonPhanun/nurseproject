import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdminUiRoute } from "../route/route";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { layoutComponent } from "../components/layout/layout.component";
import { headerComponent } from "../components/header/header.component";
import { FilterPipe } from "../pipes/filter.pipe";
import { DateRangeFilterPipe } from "../pipes/dateRangeFilter.pipe";
import { NgxPaginationModule } from 'ngx-pagination';
import { sidebarComponent } from "../components/sidebar/sidebar.component";
import { RegisterComponent } from "../components/registerPatient/register/register.component";
import { FormRegisterComponent } from "../components/registerPatient/formRegister/formRegister.component";



@NgModule({
    declarations: [
        layoutComponent,
        headerComponent,
        AppComponent,
        DateRangeFilterPipe,
        sidebarComponent,
        FilterPipe,
        RegisterComponent,
        FormRegisterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AdminUiRoute,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }