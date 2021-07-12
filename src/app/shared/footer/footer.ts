import {Component, NgModule} from '@angular/core';
import {materialVersion} from '../version/version';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  version = materialVersion;

  shouldShowTestStuff(): boolean {
    return !environment.production;
  }

}


@NgModule({
  exports: [Footer],
  declarations: [Footer],
})
export class FooterModule {}
