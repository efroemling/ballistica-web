import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'src/app/shared/carousel/carousel-module';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardPage implements OnInit {

  items = [ {
    'title':'Foo.py',
    'date':'1 sep 2022',
    'type':'workspace'
  }, {
    'title':'Foo.py',
    'date':'1 sep 2022',
    'type':'workspace'
  }];

  constructor(public _componentPageTitle: ComponentPageTitle) {
  }

  ngOnInit(): void {
    this._componentPageTitle.title = 'Dashboard';
  }

  getRecents() {
    return this.items;
  }

}

const routes: Routes = [{path: '', component: DashboardPage}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    CarouselModule,
    MatDividerModule
    ],
  declarations: [DashboardPage]
})
export class DashboardModule {
}
