import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppBaseRoutes, AppRoutes } from './core/constants';

export const routes: Routes = [
  {
    path: AppBaseRoutes.Auth,
    loadChildren: () => import('./modules/auth/auth.routes'),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: AppBaseRoutes.Athlete,
        loadChildren: () => import('./modules/athletes/athletes.routes'),
      },
      {
        path: AppBaseRoutes.Trainer,
        loadChildren: () => import('./modules/trainers/trainers.routes'),
      },
    ],
  },
  { path: '**', redirectTo: AppRoutes.Login },
];
