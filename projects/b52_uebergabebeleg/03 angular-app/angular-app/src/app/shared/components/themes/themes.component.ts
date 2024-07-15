import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

type Theme = 'light' | 'dark'

@Component({
  selector: 'themes',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.sass']
})
export class ThemesComponent implements OnInit {

  theme: Theme = 'light'

  constructor() {
    document.body.classList.contains('dark') ? this.theme = 'dark' : this.theme = 'light'
  }

  ngOnInit(): void {
  }

  toggle() {
    this.theme == 'dark' ? this.theme = 'light' : this.theme = 'dark'
    switch (true) {
      case this.theme == 'dark':
        document.body.classList.add('dark')
        // document.body.classList.remove('light')
        break
      case this.theme == 'light':
        // document.body.classList.add('light')
        document.body.classList.remove('dark')
        break
    }
  }
}