import { Component, OnInit } from '@angular/core';
import { ComponentPageTitle } from '../../page-title/page-title';

import { FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-loginpage',
  templateUrl: './login-page.html',
  styleUrls: ['../auth.scss']
})
export class Loginpage implements OnInit {
  error: string | null = null;
  forgotpassword: boolean = false;
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
  onForgotPassword() {
     this.forgotpassword = !this.forgotpassword;
  }

}
