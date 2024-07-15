# Layout

## Verwendung
Import und Export der `layout-config.component` im `SharedModule`.

```typescript
...
imports: [
    LayoutConfigModule
],
exports: [
    LayoutConfigModule
]
```

In der `app.module.ts` sind dann die Routes anzugeben. Dabei wird die `LayoutComponent` als Komponente zwischengeschoben.

```typescript
const routes: Routes = [
  // { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'auth-adfs', loadChildren: () => import('./modules/auth-adfs/auth-adfs.module').then(m => m.AuthAdfsModule) },
  { path: '', 
    // canActivate: [AuthGuard], 
    // canActivateChild: [AuthGuard], 
    canActivate: [AuthAdfsGuard],
    canActivateChild: [AuthAdfsGuard],
    component: LayoutComponent, 
    data: { layout: 'mobile' }, 
    children: [
      { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) }
    ]
  },
  { path: '**', redirectTo: '' }
]
```