import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../layouts/header-layout/header-layout.component';
import { FooterLayoutComponent } from '../../layouts/footer-layout/footer-layout.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderLayoutComponent, FooterLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  mute = true
}
