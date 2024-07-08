import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
      children: [
        {
          path: 'change-detection',
          title: 'Change dectection',
          loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
        },
        {
          path: 'control-flow',
          title: 'Control flow',
          loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
        },
        {
          path: 'defer-options',
          title: 'Defer options',
          loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
        },
        {
          path: 'defer-views',
          title: 'Defer views',
          loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
        },
        {
          path: 'input-output',
          title: 'Listado de Productos',
          loadComponent: () => import('./dashboard/pages/input-output/input-output.component'),
        },
        {
          path: 'user/:id',
          title: 'user view',
          loadComponent: () => import('./dashboard/pages/user/user.component'),
        },
        {
          path: 'users-list',
          title: 'Users list',
          loadComponent: () => import('./dashboard/pages/users/users.component'),
        },
        {
          path: 'view-transition-1',
          title: 'View transition 1',
          loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
        },
        {
          path: 'view-transition-2',
          title: 'View transition 2',
          loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
        },
        {
          path: 'material',
          title: 'A-Material',
          loadComponent: () => import('./dashboard/pages/material/material.component'),
        },
        {
          path: '',
          redirectTo: 'control-flow',
          pathMatch: 'full',
        },
      ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

];
