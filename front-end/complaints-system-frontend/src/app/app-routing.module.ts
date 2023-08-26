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
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'manager-home', component: ManagerHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'engineer-home', component: EngineerComponent, canActivate: [AuthGuard] },
  { path: 'submit-complaint', component: SubmitComplaintComponent, canActivate: [AuthGuard] },
  { path: 'track-complaints', component: TrackComplaintsComponent, canActivate: [AuthGuard] },
  { path: 'view-all-manager-complaints', component: ViewallmanagerComponent, canActivate: [AuthGuard] },
  { path: 'view-assigned-complaints', component: ViewassignedcomplaintsComponent, canActivate: [AuthGuard] },
  { path: 'view-all-complaints', component: ViewAllComplaintsComponent, canActivate: [AuthGuard] },
  { path: 'view-raised-complaints', component: ViewraisedcomplaintsComponent, canActivate: [AuthGuard] },
  { path: 'view-wip-complaints', component: ViewwipcomplaintsComponent, canActivate: [AuthGuard] },
  { path: 'view-escalated-complaints', component: ViewescalatedcomplaintsComponent, canActivate: [AuthGuard] },
  { path: 'create-user', component: CreateuseradminComponent, canActivate: [AuthGuard] },
  { path: 'view-all-users', component: ViewAllUsersComponent, canActivate: [AuthGuard] },
  { path: 'view-all-completed-complaints', component: ViewcompletedcomlaintsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
