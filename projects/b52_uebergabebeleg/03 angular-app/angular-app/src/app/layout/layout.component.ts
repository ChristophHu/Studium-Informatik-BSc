import { Component } from '@angular/core';
import { MobileComponent } from './layouts/mobile/mobile.component';
import { LayoutService } from './services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { Layout } from './model/layout.types';
import { CommonModule } from '@angular/common';

const layoutModules = [
  MobileComponent
]

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    ...layoutModules,
    MobileComponent
  ],
  providers: [LayoutService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.sass'
})
export class LayoutComponent {
  layout: Layout
  
  constructor(private _activatedRoute: ActivatedRoute) {
    let route = this._activatedRoute
    const layoutFromQueryParam = (route.snapshot.queryParamMap.get('layout') as Layout);
    if ( layoutFromQueryParam ) {
      console.log(layoutFromQueryParam)
      this.layout = layoutFromQueryParam
    } else {
      this.layout = 'mobile'
    }
  }
}