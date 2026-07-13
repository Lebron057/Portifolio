import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  // services = [
  //   'Análise de Dados',
  //   'Desenvolvimento Back-End',
  //   'Engenharia de Dados / ETL',
  //   'Desenvolvimento Front-End',
  //   'Consultoria Técnica',
  //   'Outro'
  // ];

  submitted = signal(false);
  sending = signal(false);

  onSubmit() {
    this.sending.set(true);
    // Simula envio
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
    }, 1800);
  }

  reset() {
    this.submitted.set(false);
    this.formData = { name: '', email: '', phone: '', service: '', message: '' };
  }
}
