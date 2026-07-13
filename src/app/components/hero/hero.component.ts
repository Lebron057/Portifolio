import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  AfterViewInit,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedText = signal('');
  private titles = [
    'Data Analyst Intern',
    'Desenvolvedor Full-Stack',
    'Estudante de Sistemas Inteligentes'
  ];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutRef: ReturnType<typeof setTimeout> | null = null;
  showCursor = signal(true);

  ngOnInit() {
    this.typeLoop();
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    if (this.timeoutRef) clearTimeout(this.timeoutRef);
  }

  private typeLoop() {
    const current = this.titles[this.titleIndex];
    if (!this.isDeleting) {
      this.displayedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.timeoutRef = setTimeout(() => {
          this.isDeleting = true;
          this.typeLoop();
        }, 2200);
        return;
      }
    } else {
      this.displayedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
    }
    const speed = this.isDeleting ? 60 : 100;
    this.timeoutRef = setTimeout(() => this.typeLoop(), speed);
  }

  scrollTo(anchor: string) {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
