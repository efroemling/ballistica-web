import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import {NavigationFocusService} from './shared/navigation-focus/navigation-focus.service';
import {Subscription} from 'rxjs';
import {map, pairwise, startWith} from 'rxjs/operators';

@Component({
  selector: 'ballistica-app',
  templateUrl: './ballistica-app.html',
  styleUrls: ['./ballistica-app.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BallisticaApp implements OnDestroy {
  private subscriptions = new Subscription();

  constructor(navigationFocusService: NavigationFocusService) {
    this.subscriptions.add(navigationFocusService.navigationEndEvents.pipe(
      map(e => e.urlAfterRedirects),
      startWith(''),
      pairwise()
    ).subscribe(([fromUrl, toUrl]) => {
      // We want to reset the scroll position on navigation except when navigating within
      // the documentation for a single component.
      if (!navigationFocusService.isNavigationWithinComponentView(fromUrl, toUrl)) {
        resetScrollPosition();
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
