import { Route } from '@angular/router';

export default [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
  },
] satisfies Route[];
