import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { CreatedocComponent } from './components/createdoc/createdoc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ViewdepsComponent } from './components/viewdeps/viewdeps.component';
import { MoaComponent } from './components/moa/moa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreatedocComponent,
    ProfileComponent,
    AppointmentsComponent,
    ViewdepsComponent,
    MoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
