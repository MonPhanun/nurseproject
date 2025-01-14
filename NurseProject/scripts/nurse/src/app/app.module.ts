import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdminUiRoute } from "../route/route";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { layoutComponent } from "../components/layout/layout.component";
import { headerComponent } from "../components/header/header.component";
import { providerComponent } from "../components/choiceProvider/formProvider/formProvider.component";
import { ProviderComponent } from "../components/choiceProvider/provider/provider.component";
import { FormDressingComponent } from "../components/dressignProvider/formDressing/formDressing.component";
import { DressingComponent } from "../components/dressignProvider/dressing/dressing.component";
import { requestListComponent } from "../components/viewRequest/viewRequest/requestList.component";
import { viewListComponent } from "../components/viewRequest/viewList/viewList.component";
import { ResponseComponent } from "../components/viewResponse/response/response.component";
import { ViewResponseComponent } from "../components/viewResponse/viewResponse/viewResponse.component";
import { FilterPipe } from "../pipes/filter.pipe";
import { DateRangeFilterPipe } from "../pipes/dateRangeFilter.pipe";
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
    declarations: [
        layoutComponent,
        headerComponent,
        providerComponent,
        ProviderComponent,
        FormDressingComponent,
        DressingComponent,
        requestListComponent,
        viewListComponent,
        ResponseComponent,
        ViewResponseComponent,
        AppComponent,
        DateRangeFilterPipe,
        FilterPipe
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
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }