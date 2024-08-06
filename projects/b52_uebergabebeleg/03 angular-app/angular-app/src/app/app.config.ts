import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LayoutComponent } from './layout/layout.component';

// routes
export const routes: Routes = [
  { path: '', 
    component: LayoutComponent,
    data: { layout: 'mobile' }, 
    children: [
      { path: '', loadComponent: () => import('./modules/landing/landing.component').then(m => m.LandingComponent) },
      // http://localhost:4200/beleg/
      { path: 'beleg', loadComponent: () => import('./modules/beleg/beleg.component').then(m => m.BelegComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
