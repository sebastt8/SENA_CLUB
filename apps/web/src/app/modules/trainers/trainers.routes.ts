import { Route } from '@angular/router';

export default [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/trainers-list/trainers-list.component'),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/trainer-create/trainer-create.component'),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./pages/trainer-edit/trainer-edit.component'),
      },
    ],
  },
] satisfies Route[];
