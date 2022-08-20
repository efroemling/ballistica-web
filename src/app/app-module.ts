import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BallisticaApp} from './ballistica-app';
import {MATERIAL_DOCS_ROUTES} from './routes';
import {NavBarModule} from './shared/navbar';
import {CookiePopupModule} from './shared/cookie-popup/cookie-popup-module';

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
  ],
  declarations: [BallisticaApp],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [BallisticaApp],
})
export class AppModule {}
