import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'CESB (Comitê Estratégico Soja Brasil)',
      role: 'Estagiário em Análise de Dados',
      period: 'Nov/2025 – Presente',
      location: 'Brasil',
      bullets: [
        'Desenvolvimento de fluxo de dados end-to-end com Python (Pandas/NumPy) e Jupyter Notebooks para consolidação, limpeza e processamento (ETL).',
        'Modelagem e persistência de dados em banco MySQL orquestrado via Docker (Docker Compose).',
        'Criação e manutenção de dashboards dinâmicos no Metabase para monitoramento de logs, métricas e indicadores estratégicos para a diretoria.',
        'Desenvolvimento e otimização de scripts/queries SQL para suporte às rotinas analíticas.',
        'Versionamento e organização de código com Git/GitHub.'
      ],
      tags: ['ETL', 'Python', 'Pandas', 'NumPy', 'SQL', 'MySQL', 'Docker', 'Metabase', 'Git/GitHub']
    }
  ];
}
