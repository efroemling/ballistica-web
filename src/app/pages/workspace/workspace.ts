import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.html',
  styleUrls:['./workspace.scss']
})
export class Workspace implements OnInit {

  ngOnInit(): void {

  }
}

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.html',
  styleUrls:['./workspace.scss']
})
export class WorkspaceList implements OnInit {
  breakpoint: number = 4;
  rowHeight: string = '3:1';

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 600) ? '3:1' : '2:1';
  }
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
    this.rowHeight = (event.target.innerWidth <= 600) ? '3:1' : '2:1';
  }
}

const routes: Routes = [
  {
    path : '',
    component: WorkspaceList
  },
  {path:':workspaceId', component: Workspace}
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  declarations:[WorkspaceList, Workspace]
})
export class WorkspaceModule {

}
