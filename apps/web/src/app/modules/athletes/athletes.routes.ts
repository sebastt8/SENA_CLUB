import { Route } from '@angular/router';

export default [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/athletes-list/athletes-list.component'),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./pages/athlete-edit/athlete-edit.component'),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/athlete-create/athlete-create.component'),
      },
    ],
  },
] satisfies Route[];
