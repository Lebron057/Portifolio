import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  skills = [
    { name: 'SQL / Metabase', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Java & Spring Boot', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'Docker', level: 65 },
    { name: 'MySQL & MongoDB', level: 78 },
  ];

  experience = [
    {
      role: 'Estagiário em Análise de Dados',
      company: 'CESB',
      period: 'Nov/2025 — Presente',
      desc: 'Análise de dados agropecuários, criação de queries SQL complexas, desenvolvimento de pipelines ETL automatizados com Python e Docker, e visualização via Metabase.',
      current: true
    },
    {
      role: 'Scrum Master',
      company: 'InovaSkill 2025 / Mentto',
      period: 'Abr/2025 — Nov/2025',
      desc: 'Liderança ágil de equipe multidisciplinar, facilitação de cerimônias Scrum, gestão de backlog e remoção de impedimentos em projeto de inovação.',
      current: false
    }
  ];

  animatedSkills = signal(false);

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animatedSkills.set(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      const section = document.querySelector('#about');
      if (section) observer.observe(section);

      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }, 100);
  }
}
