import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  gradient: string;
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  activeFilter = signal('all');

  filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Data Science', value: 'data' },
    { label: 'Back-End', value: 'backend' },
    { label: 'Full-Stack / Inovação', value: 'fullstack' },
  ];

  allProjects: Project[] = [
    {
      title: 'Weather Tracker',
      desc: 'Pipeline de extração, transformação e carregamento (ETL) de dados climáticos em tempo real, utilizando Python para coleta via API, Docker para containerização e MySQL para persistência.',
      tags: ['Python', 'Docker', 'MySQL', 'ETL', 'API REST'],
      category: 'data',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      icon: '🌦️'
    },
    {
      title: 'LiterAlura',
      desc: 'Aplicação back-end desenvolvida em Java com Spring Boot para consumo da API pública Gutendex. Permite buscar livros por título, listar autores por período e persistir dados de literatura em banco relacional.',
      tags: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'API'],
      category: 'backend',
      gradient: 'linear-gradient(135deg, #1a2e1a 0%, #162e16 100%)',
      icon: '📚'
    },
    {
      title: 'EasyRise',
      desc: 'Dispositivo assistivo biomecânico inovador desenvolvido para a Mostra de Biomecânica da UNESP Marília. Projeto interdisciplinar de hardware e software com foco em acessibilidade e mobilidade.',
      tags: ['React JS', 'Deploy', 'UNESP'],
      category: 'fullstack',
      gradient: 'linear-gradient(135deg, #2e1a1a 0%, #2e1616 100%)',
      icon: '♿'
    }
  ];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    if (f === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.category === f);
  }

  setFilter(value: string) {
    this.activeFilter.set(value);
  }
}
