import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  services = [
    {
      icon: ``,
      title: 'Análise de Dados',
      desc: 'Limpeza e transformação de dados, construção de queries complexas em SQL e criação de dashboards no Metabase para tomada de decisão.',
      tags: ['SQL', 'Metabase', 'ETL', 'Python']
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      title: 'Engenharia de Dados / ETL',
      desc: 'Desenvolvimento de pipelines de dados automatizados com Python, orquestração em containers Docker e persistência em MySQL.',
      tags: ['Python', 'Docker', 'MySQL', 'Pipelines']
    },
    {
      icon: `<span class="material-symbols-outlined">local_cafe</span>`,
      title: 'Desenvolvimento Back-End',
      desc: 'Criação de APIs robustas, escaláveis e documentadas com Java e o ecossistema Spring Boot (Spring Data, Spring Security).',
      tags: ['Java', 'Spring Boot', 'REST API', 'JPA']
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      title: 'Desenvolvimento Front-End',
      desc: 'Construção de interfaces modernas, responsivas e interativas com Angular e TypeScript, seguindo boas práticas de UX.',
      tags: ['Angular', 'TypeScript', 'CSS']
    }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    setTimeout(() => {
      this.cards?.forEach(c => observer.observe(c.nativeElement));
    }, 100);
  }
}
