import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    AuthenticationPageRoutingModule
  ],
  declarations: [
    AuthenticationPage,
    RegisterComponent,
    ProfileComponent,
    ForgotComponent,
    LoginComponent
  ]
})
export class AuthenticationPageModule {}
