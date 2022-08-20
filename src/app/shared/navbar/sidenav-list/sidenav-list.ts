import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.html',
  styleUrls: ['./sidenav-list.scss']
})
export class SidenavList implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

}

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [SidenavList],
  declarations: [SidenavList],
  providers: []
})
export class SidenavListModule {
}
