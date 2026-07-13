import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-about></app-about>
      <app-portfolio></app-portfolio>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    main { display: block; }
  `]
})
export class AppComponent {}
