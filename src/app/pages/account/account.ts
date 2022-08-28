import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { ComponentPageTitle } from '../page-title/page-title';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface Sessions {
  no: number;
  type: string;
  location: string;
  active: string;
  extra: string;
}
const ACTIVE_SESSIONS: Sessions[] = [
  {no: 1, type : 'Web Tools - Edge', location:'my home', active:'< 1h ago', extra:'dfg'},
  {no: 2, type : 'bacloud', location:'my home', active:'< 19days ago', extra:'dfg'},
  {no: 3, type : 'Web Tools - Edge', location:'my home', active:'< 3h ago', extra:'dfg'},
  {no: 4, type : 'bacloud', location:'IN / mh / mumbai', active:'< 1h ago', extra:'dfg'},
  {no: 5, type : 'Web Tools - Edge', location:'my home', active:'< 3h ago', extra:'dfg'},
  {no: 6, type : 'game', location:'my home', active:'< 6h ago', extra:'dfg'}
];

@Component({
  selector: 'app-account',
  templateUrl: './account.html',
  styleUrls: ['./account.scss']
})
export class AccountPage implements OnInit {
  displayedColumns: string[] = ['type', 'location', 'active', 'extra'];
  dataSource = ACTIVE_SESSIONS;
  constructor(public _componentPageTitle: ComponentPageTitle, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._componentPageTitle.title = 'Account';
  }

  onChangePassword() {
     this.dialog.open(ChangePassword,{width: '450px'});
  }
}

@Component({
  selector:'change-password-dialog',
  templateUrl: 'change-password-dialog.html'
})
export class ChangePassword {

  currentpassword: string='';

  constructor(
    public dialogRef: MatDialogRef<ChangePassword>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

const routes: Routes = [{path: '', component: AccountPage}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    ],
  declarations: [AccountPage,ChangePassword]
})
export class AccountModule {
}
