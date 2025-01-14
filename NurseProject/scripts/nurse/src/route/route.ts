import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { layoutComponent } from '../components/layout/layout.component';
import { ProviderComponent } from '../components/choiceProvider/provider/provider.component';
import { DressingComponent } from '../components/dressignProvider/dressing/dressing.component';
import { viewListComponent } from '../components/viewRequest/viewList/viewList.component';
import { ResponseComponent } from '../components/viewResponse/response/response.component';


const adminRoute: Routes = [
    {
        path: 'home',
        component: layoutComponent,
        children: [
            {
                path: 'provider',
                component: ProviderComponent
            },
            {
                path: 'dressing',
                component: DressingComponent
            },
            {
                path: 'request',
                component: viewListComponent
            },
            {
                path: 'response',
                component: ResponseComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(adminRoute, { useHash: true })],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminUiRoute {

}