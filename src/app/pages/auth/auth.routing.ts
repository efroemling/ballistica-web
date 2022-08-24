import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginpage } from './login/login-page';
import { Signuppage } from './signup/signup-page';


const routes: Routes = [
  { path: '',
    component: Loginpage},
      { path: 'login', component: Loginpage },
      { path: 'signup', component: Signuppage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
