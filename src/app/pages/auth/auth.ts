import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Loginpage } from './login/login-page';
import { Signuppage } from './signup/signup-page';
import { AuthRoutingModule } from './auth.routing';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AuthRoutingModule
    ],
  declarations: [Loginpage,Signuppage]
})
export class  AuthModule {
}
