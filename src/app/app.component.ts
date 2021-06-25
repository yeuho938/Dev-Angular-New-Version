import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // @HostBinding('class') get getClass() {
  //   return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  // }
}
