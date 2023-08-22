import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateuseradminComponent } from './createuseradmin/createuseradmin.component';
import { EngineerComponent } from './engineer/engineer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmitComplaintComponent } from './submit-complaint/submit-complaint.component';
import { TrackComplaintsComponent } from './track-complaints/track-complaints.component';
import { ViewAllComplaintsComponent } from './view-all-complaints/view-all-complaints.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewallmanagerComponent } from './viewallmanager/viewallmanager.component';
import { ViewassignedcomplaintsComponent } from './viewassignedcomplaints/viewassignedcomplaints.component';
import { ViewcompletedcomlaintsComponent } from './viewcompletedcomlaints/viewcompletedcomlaints.component';
import { ViewescalatedcomplaintsComponent } from './viewescalatedcomplaints/viewescalatedcomplaints.component';
import { ViewraisedcomplaintsComponent } from './viewraisedcomplaints/viewraisedcomplaints.component';
import { ViewwipcomplaintsComponent } from './viewwipcomplaints/viewwipcomplaints.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'manager-home',component:ManagerHomeComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'engineer-home',component:EngineerComponent},
  {path:'submit-complaint',component:SubmitComplaintComponent},
  {path:'track-complaints',component:TrackComplaintsComponent},
  {path:'view-all-manager-complaints',component:ViewallmanagerComponent},
  {path:'view-assigned-complaints',component:ViewassignedcomplaintsComponent},
  {path:'view-all-complaints',component:ViewAllComplaintsComponent},
  {path:'view-raised-complaints',component:ViewraisedcomplaintsComponent},
  {path:'view-wip-complaints',component:ViewwipcomplaintsComponent},
  {path:'view-escalated-complaints',component:ViewescalatedcomplaintsComponent},
  {path:'create-user',component:CreateuseradminComponent},
  {path:'view-all-users',component:ViewAllUsersComponent},
  {path:'view-all-completed-complaints',component:ViewcompletedcomlaintsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
