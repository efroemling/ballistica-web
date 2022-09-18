import { Component, OnInit } from '@angular/core';
import { ComponentPageTitle } from '../../page-title/page-title';

import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signup-page.html',
  styleUrls: ['../auth.scss']
})
export class Signuppage implements OnInit {
  error: string | null = null;
  forgotpassword: boolean = false;
  constructor(public _componentPageTitle: ComponentPageTitle) {
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatpassword: new FormControl(''),
  });

  ngOnInit(): void {
    this._componentPageTitle.title = 'Signup';
  }
  submit() {
    if (this.form.valid) {
    }
  }
  onForgotPassword() {
     this.forgotpassword = true;
  }

}
