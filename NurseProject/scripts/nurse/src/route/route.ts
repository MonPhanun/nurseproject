import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { layoutComponent } from '../components/layout/layout.component';
import { viewListComponent } from '../components/viewRequest/viewList/viewList.component';
import { ResponseComponent } from '../components/viewResponse/response/response.component';
import { RegisterComponent } from '../components/registerPatient/register/register.component';


const adminRoute: Routes = [
    {
        path: 'home',
        component: layoutComponent,
        children: [
            //{
            //    path: 'provider',
            //    component: ProviderComponent
            //},
            {
                path: 'register',
                component: RegisterComponent
            },
            //{
            //    path: 'request',
            //    component: viewListComponent
            //},
            //{
            //    path: 'response',
            //    component: ResponseComponent
            //}
        ]
    },
    {
        redirectTo: "home",
        path: "",
        pathMatch: "full"
    }
]

@NgModule({
    imports: [RouterModule.forRoot(adminRoute, { useHash: true })],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminUiRoute {

}