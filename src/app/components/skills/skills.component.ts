import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  featured?: boolean;
  skills: { name: string; level?: string; icon?: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Engenharia & Análise de Dados / BI',
      subtitle: 'Foco Principal de Carreira',
      icon: '📊',
      featured: true,
      skills: [
        { name: 'SQL', level: 'Intermediário', icon: '🔍' },
        { name: 'Metabase BI', level: 'Prático', icon: '📈' },
        { name: 'Python (Pandas / NumPy)', level: 'Prático', icon: '🐍' },
        { name: 'Pipelines ETL & Limpeza', level: 'Intermediário', icon: '🔄' },
        { name: 'Análise Exploratória', level: 'Intermediário', icon: '🔎' },
        { name: 'MySQL', level: 'Prático', icon: '🗄️' },
        { name: 'Docker / Docker Compose', level: 'Prático', icon: '🐳' },
        { name: 'Power BI', level: 'Básico', icon: '📊' },
        { name: 'Pacote Office / Excel', level: 'Intermediário', icon: '📑' }
      ]
    },
    {
      title: 'Desenvolvimento Backend',
      subtitle: 'Estruturação & APIs',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 'Básico', icon: '☕' },
        { name: 'Spring Boot', level: 'Básico', icon: '🍃' },
        { name: 'Python (Backend)', level: 'Básico', icon: '🐍' }
      ]
    },
    {
      title: 'Desenvolvimento Frontend',
      subtitle: 'Interfaces & Aplicações Web',
      icon: '💻',
      skills: [
        { name: 'React (v18)', level: 'Básico', icon: '⚛️' },
        { name: 'Angular (18+)', level: 'Prático', icon: '🅰️' },
        { name: 'TypeScript', level: 'Prático', icon: '📘' },
        { name: 'HTML5', level: 'Avançado', icon: '🌐' },
        { name: 'CSS3', level: 'Intermediário', icon: '🎨' }
      ]
    },
    {
      title: 'Ferramentas & Processos',
      subtitle: 'Versionamento & Agilidade',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', level: 'Avançado', icon: '🐙' },
        { name: 'Metodologias Ágeis (Scrum)', level: 'Avançado', icon: '🔄' },
        { name: 'Engenharia de Software', level: 'Prático', icon: '📐' }
      ]
    }
  ];
}
