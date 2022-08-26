import {Component, EventEmitter, NgModule, OnDestroy, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
// import {VersionPickerModule} from '../version-picker';
import {ThemeStorage} from '../theme-picker/theme-storage/theme-storage';
import {StyleManager} from '../style-manager';
import {Subscription} from 'rxjs';
import {NavigationFocusService} from '../navigation-focus/navigation-focus.service';
import {environment} from '../../../environments/environment';
import { ThemePickerModule } from '../theme-picker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar implements OnDestroy {

  @Output() public sidenavToggle = new EventEmitter();

  gitHubUrl = 'https://github.com/efroemling/ballistica';

  private subscriptions = new Subscription();
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  skipLinkHref: string | null | undefined;
  skipLinkHidden = true;

  constructor(private navigationFocusService: NavigationFocusService) {
    setTimeout(() => this.skipLinkHref = this.navigationFocusService.getSkipLinkHref(), 100);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  shouldShowTestStuff(): boolean {
    return !environment.production;
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    ThemePickerModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
  providers: [StyleManager, ThemeStorage]
})
export class NavBarModule {
}
