import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'demo-film',
    pathMatch: 'full',
  },
  {
    path: 'demo-film',
    loadComponent: () => import('./demo/demo-film/demo-film/demo-film.page').then( m => m.DemoFilmPage)
  },
];
