import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreatedocComponent } from './components/createdoc/createdoc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ViewdepsComponent } from './components/viewdeps/viewdeps.component';
import { MoaComponent } from './components/moa/moa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin/createdoc',
    component: CreatedocComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'admin/viewallapps',
    component: AppointmentsComponent
  },
  {
    path: 'admin/viewdocs',
    component: ViewdepsComponent
  }, 
  {
    path: 'user/make-an-appointment',
    component: MoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
