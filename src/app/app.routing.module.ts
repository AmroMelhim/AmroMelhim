import { AppoitmentCreateComponent } from './appoitment-create/appoitment-create.component';
import { AppoitmentComponent } from './appoitment/appoitment.component';
import { doctor } from './models/doctor';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DoctorComponent } from "./doctor/doctor.component";
import { DoctorCreateComponent } from "./doctor-create/doctor-create.component";
import { DoctorDetailComponent } from "./doctor-detail/doctor-detail.component";
import { DoctorEditComponent } from "./doctor-edit/doctor-edit.component";
import { HomeComponent } from "./home/home.component";
import { PatientCreateComponent } from "./patient-create/patient-create.component";
import { PatientDetailComponent } from "./patient-detail/patient-detail.component";
import { PatientEditComponent } from "./patient-edit/patient-edit.component";
import { PatientsComponent } from "./patients/patients.component";
import { AppoitmentEditComponent } from './appoitment-edit/appoitment-edit.component';
import { AppoitmentDetailsComponent } from './appoitment-details/appoitment-details.component';


const appRoutes:Route[] = [
  
  {path:'home', component: HomeComponent},
  {path:'patients', component: PatientsComponent, children: 
   [
   
   {path:'create', component: PatientCreateComponent}, 
    {path:':id', component: PatientDetailComponent},
    {path:':id/edit', component: PatientEditComponent},
    
   ]
  },
  
  {path:'doctor', component: DoctorComponent, children: 
   [
   
   {path:'create', component: DoctorCreateComponent}, 
   {path:':id', component: DoctorDetailComponent},
   {path:':id/edit', component: DoctorEditComponent},
    
   ]

  },


 {path:'appoitment', component:AppoitmentComponent, children:[

  {path:'create',component:AppoitmentCreateComponent},
  {path:':id', component: AppoitmentDetailsComponent},
   {path:':id/edit', component: AppoitmentEditComponent}
 ]} ,
  

   

  
 
  
];



 

@NgModule(
   {
    imports:[
      RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
   }
)
export class   AppRoutingModule{

}