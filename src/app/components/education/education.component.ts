import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  name: string;
  institution: string;
  status: string;
  year?: string;
  details?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  academicDegree = {
    title: 'Tecnologia em Sistemas Inteligentes',
    institution: 'Fatec Pompeia Shunji Nishimura',
    status: 'Em andamento',
    completion: 'Previsão de conclusão: Dezembro de 2027',
    icon: '🎓'
  };

  certifications: Certification[] = [
    {
      name: 'Potência Tech | Ciência de Dados',
      institution: 'DIO.me / iFood',
      status: 'Concluído',
      details: 'Formação em Ciência de Dados com suporte da DIO.me e iFood.'
    },
    {
      name: 'Curso Synapse',
      institution: 'CIAg',
      status: 'Concluído',
      year: '2025',
      details: 'Capacitação prática em tecnologia e desenvolvimento.'
    },
    {
      name: 'Oracle Next Education (ONE) | Especialização Back-End',
      institution: 'Alura / Oracle',
      status: 'Em andamento',
      details: 'Especialização em desenvolvimento Back-End com Java e ecossistema Oracle.'
    },
    {
      name: 'CS50p: Introduction to Programming with Python',
      institution: 'Harvard / edX',
      status: 'Em andamento',
      details: 'Introdução à programação e estruturas de dados com Python.'
    },
    {
      name: 'Fundamentos da Análise de Dados',
      institution: 'Cisco Networking Academy',
      status: 'Em andamento',
      details: 'Conceitos fundamentais de análise, exploração e tratamento de dados.'
    },
    {
      name: 'Bootcamp Power BI com Inteligência Artificial',
      institution: 'Bootcamp Especializado',
      status: 'Em andamento',
      details: 'Fundamentos de IA, SQL, DAX, modelagem dimensional, Star Schema, MySQL e Azure.'
    }
  ];

  language = {
    name: 'Inglês',
    level: 'Nível A2 (Básico / Pré-intermediário)',
    desc: 'Leitura fluida de documentação técnica e escrita básica.'
  };
}
