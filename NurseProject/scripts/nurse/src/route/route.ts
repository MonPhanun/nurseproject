import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { layoutComponent } from '../components/layout/layout.component';
import { RegisterComponent } from '../components/registerPatient/register/register.component';
import { CheckHealthComponent } from '../components/checkHealth/checkHealth/checkHealth.component';
import { BloodResultComponent } from '../components/bloodResult/bloodResult/bloodResult.component';


const adminRoute: Routes = [
    {
        path: 'home',
        component: layoutComponent,
        children: [
         
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'checkhealth',
                component: CheckHealthComponent
            },
            {
                path: 'blood',
                component: BloodResultComponent
            }
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