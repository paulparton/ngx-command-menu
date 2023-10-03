import { Route } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoAboutComponent } from './demo-about/demo-about.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DemoHomeComponent
  },
  {
    path: 'about',
    component: DemoAboutComponent
  }
];
