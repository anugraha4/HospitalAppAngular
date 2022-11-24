import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
{
  path:"", 
  component:PatiententryComponent
},
{
  path:"search",
  component:PatientsearchComponent

},
{
  path:"delete",
  component:PatientdeleteComponent
},
{
  path:"view",
  component:ViewAllPatientsComponent

}


]

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientsearchComponent,
    PatientdeleteComponent,
    ViewAllPatientsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
