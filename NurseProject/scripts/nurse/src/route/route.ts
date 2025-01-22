import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { layoutComponent } from '../components/layout/layout.component';
import { RegisterComponent } from '../components/registerPatient/register/register.component';
import { CheckHealthComponent } from '../components/checkHealth/checkHealth/checkHealth.component';
import { BloodResultComponent } from '../components/bloodResult/bloodResult/bloodResult.component';
import { BuildingComponent } from '../components/patientRoom/building/building.component';
import { BuildingTyleComponent } from '../components/patientRoom/buildingType/buildingType.component';
import { MedicalRecordComponent } from '../components/medicalRecord/medicalRecord/medicalRecord.component';
import { PatientRecordComponent } from '../components/medicalRecord/patientRecord/patientRecord.component';


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
            },
            {
                path: 'building',
                component: BuildingComponent
            }, 
            {
                path: 'buildingType',
                component: BuildingTyleComponent
            }, 
            {
                path: 'medical',
                component: MedicalRecordComponent
            }, 
            {
                path: 'patientrecord',
                component: PatientRecordComponent
            }, 
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