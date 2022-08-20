import {Component, HostBinding, NgModule, OnInit} from '@angular/core';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {MatButtonModule} from '@angular/material/button';
import {FooterModule} from '../../shared/footer/footer';
import {RouterModule, Routes} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';
import {NavigationFocusModule} from '../../shared/navigation-focus/navigation-focus';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CarouselModule} from '../../shared/carousel/carousel-module';
import {Support} from '../../shared/support/support';
import {environment} from '../../../environments/environment';
import {news} from './news';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor(public _componentPageTitle: ComponentPageTitle) {
  }

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }

  getNews(): {'title': string,'date': string,'desc': string}[] {
    return news;
  }

  shouldShowTestStuff(): boolean {
    return !environment.production;
  }

}

const routes: Routes = [{path: '', component: Homepage}];

@NgModule({
  imports: [SvgViewerModule,
    MatButtonModule,
    FooterModule,
    RouterModule.forChild(routes),
    NavigationFocusModule, MatIconModule, MatDividerModule, MatCardModule, CommonModule,
    CarouselModule,
    FlexLayoutModule],
  exports: [Homepage],
  declarations: [Homepage, Support],
  providers: []
})
export class HomepageModule {
}
