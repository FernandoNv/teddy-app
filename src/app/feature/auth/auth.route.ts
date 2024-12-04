import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin',
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },
];
