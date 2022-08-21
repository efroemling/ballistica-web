import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommonModule} from '@angular/common';
import { FooterModule } from 'src/app/shared/footer/footer';
import { ComponentPageTitle } from '../../page-title/page-title';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup , ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-loginpage',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class Loginpage implements OnInit {
  error: string | null = null;
  constructor(public _componentPageTitle: ComponentPageTitle) {
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(''),
  });

  ngOnInit(): void {
    this._componentPageTitle.title = 'Login';
  }
  submit() {
    if (this.form.valid) {
    }
  }

}

const routes: Routes = [{path: '', component: Loginpage}];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FooterModule,
    RouterModule.forChild(routes),
    ],
  exports: [Loginpage],
  declarations: [Loginpage],
  providers: []
})
export class  LoginpageModule {
}
