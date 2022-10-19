import { Route } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

export const routes: Route[] = [
  {
    path: 'first',
    component: FirstPageComponent,
  },
  {
    path: 'second',
    loadComponent: () =>
      import('./second-page/second-page.component').then(
        (component) => component.SecondPageComponent
      ),
  },
  {
    path: 'third',
    component: ThirdPageComponent,
  },
];
