import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import {BallisticaApp} from './ballistica-app';
import { Layout } from './shared/layout/layout';
import {MATERIAL_DOCS_ROUTES} from './routes';
import {NavBarModule} from './shared/navbar';
import {SidenavListModule} from './shared/navbar/sidenav-list/sidenav-list';
import {CookiePopupModule} from './shared/cookie-popup/cookie-popup-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(MATERIAL_DOCS_ROUTES, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'corrected'
    }),
    NavBarModule,
    CookiePopupModule,
    FlexLayoutModule,
    MatSidenavModule,
    SidenavListModule,
    HttpClientModule
  ],
  declarations: [BallisticaApp,Layout],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [BallisticaApp],
})
export class AppModule {}
