import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Home', anchor: '#home' },
    { label: 'Serviços', anchor: '#services' },
    { label: 'Sobre Mim', anchor: '#about' },
    { label: 'Portfólio', anchor: '#portfolio' },
    { label: 'Contato', anchor: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollTo(anchor: string) {
    this.closeMenu();
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
