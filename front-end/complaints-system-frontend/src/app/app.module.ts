import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ScrComponent } from './scr/scr.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ViewAllComplaintsComponent } from './view-all-complaints/view-all-complaints.component';
import { SubmitComplaintComponent } from './submit-complaint/submit-complaint.component';
import { TrackComplaintsComponent } from './track-complaints/track-complaints.component';
import { ViewallmanagerComponent } from './viewallmanager/viewallmanager.component';
import { ViewassignedcomplaintsComponent } from './viewassignedcomplaints/viewassignedcomplaints.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrComponent,
    LoginComponent,
    RegistrationComponent,
    ManagerHomeComponent,
    AdminHomeComponent,
    EngineerComponent,
    ViewAllComplaintsComponent,
    SubmitComplaintComponent,
    TrackComplaintsComponent,
    ViewallmanagerComponent,
    ViewassignedcomplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
