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
      { path: '', loadComponent: () => import('./modules/landing/landing.component').then(m => m.LandingComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
