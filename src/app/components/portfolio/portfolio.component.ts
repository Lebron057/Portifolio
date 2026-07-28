import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  subtitle?: string;
  desc: string;
  tags: string[];
  category: string | string[];
  gradient: string;
  icon: string;
  githubUrl?: string;
  projectUrl?: string;
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
    { label: 'Dados & BI', value: 'data' },
    { label: 'IA & Automação', value: 'ia' },
    { label: 'Full-Stack / Web', value: 'fullstack' },
  ];

  allProjects: Project[] = [
    {
      title: 'EasyRise — Dispositivo Biomecânico Assistivo',
      subtitle: 'II Mostra de Biomecânica UNESP',
      desc: 'Desenvolvimento da plataforma digital responsiva para o EasyRise, assento inteligente com molas reguláveis para auxílio de idosos, gestantes e pacientes em reabilitação. O site documenta a fundamentação biomecânica, funcionamento e critérios de testes.',
      tags: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Framer Motion', 'React Router'],
      category: 'fullstack',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      icon: '🪑',
      projectUrl: 'https://lnkd.in/dbwUAwTV'
    },
    {
      title: 'Pipeline de Dados e Análise E-commerce (Olist)',
      subtitle: 'Projeto Pessoal',
      desc: 'Pipeline de dados end-to-end desenvolvido com SQL e BI (Metabase) aplicado a um ecossistema real de e-commerce para análise de vendas e comportamento do consumidor.',
      tags: ['SQL', 'Metabase', 'Python', 'ETL', 'MySQL'],
      category: 'data',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      icon: '📊',
      githubUrl: 'https://github.com/Lebron057/olist-ecommerce-analysis'
    },
    {
      title: 'Análise de Dados de Saúde Pública',
      subtitle: 'Parceria CIAg & DHS Pompeia',
      desc: 'Liderança técnica na análise estratégica de dados de saúde pública municipal para otimização da alocação de recursos e tomadas de decisão via SQL e Metabase.',
      tags: ['SQL', 'Metabase', 'BI', 'Análise de Dados'],
      category: 'data',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
      icon: '🏥'
    },
    {
      title: 'Análise Exploratória de Dados: Airbnb em São Paulo',
      subtitle: 'Projeto Pessoal',
      desc: 'Análise exploratória de dados realizada sobre um dataset do Airbnb na cidade de São Paulo, com foco no tratamento e análise de dados tabulares para identificar padrões de precificação e características das propriedades.',
      tags: ['Python', 'EDA', 'Tratamento de Dados', 'Jupyter'],
      category: 'data',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      icon: '📊',
      githubUrl: 'https://github.com/Lebron057/analise_dados_airbnb'
    },
    {
      title: 'Portal de Negócios Municipal',
      subtitle: 'Parceria CIAg',
      desc: 'Plataforma completa para fomento do comércio local, desenvolvida e apresentada ao executivo municipal para impulsionar a economia local.',
      tags: ['Angular', 'Python', 'TypeScript', 'CSS3'],
      category: 'fullstack',
      gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      icon: '🏛️'
    },
    {
      title: 'InovaSkill 2026 — Automação Industrial',
      subtitle: 'Jacto Agrícola',
      desc: 'Automação de processos industriais com sistema de predição em ambiente fabril para antecipar falhas operacionais e otimizar a produtividade.',
      tags: ['Python', 'Modelagem Preditiva', 'Power BI', 'Automação'],
      category: ['data', 'ia'],
      gradient: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)',
      icon: '⚙️'
    },
    {
      title: 'InovaSkill 2025 — Sistema de OS com IA',
      subtitle: 'Mazi Foods',
      desc: 'Liderança de equipe ágil como Scrum Master no desenvolvimento de MVP para gestão de Ordens de Serviço integrada com IA Generativa.',
      tags: ['Scrum Master', 'IA Generativa', 'Python', 'MVP'],
      category: 'ia',
      gradient: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)',
      icon: '🤖'
    }
  ];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    if (f === 'all') return this.allProjects;
    return this.allProjects.filter(p =>
      Array.isArray(p.category) ? p.category.includes(f) : p.category === f
    );
  }

  setFilter(value: string) {
    this.activeFilter.set(value);
  }
}
