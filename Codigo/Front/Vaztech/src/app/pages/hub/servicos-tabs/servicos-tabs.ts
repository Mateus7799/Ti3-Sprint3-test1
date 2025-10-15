import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface Servico {
  id: number;
  numeroOS: string;
  cliente: string;
  aparelho: string;
  defeito: string;
  status: 'pendente' | 'em_andamento' | 'aguardando_pecas' | 'concluido' | 'entregue';
  dataEntrada: Date;
  previsaoEntrega?: Date;
}

@Component({
  selector: 'app-servicos-tabs',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TagModule,
  ],
  templateUrl: './servicos-tabs.html',
  styleUrl: './servicos-tabs.css',
})
export class ServicosTabsComponent {
  servicos: Servico[] = [
    {
      id: 1,
      numeroOS: 'OS-2024-001',
      cliente: 'João Silva',
      aparelho: 'iPhone 13 Pro',
      defeito: 'Tela quebrada',
      status: 'em_andamento',
      dataEntrada: new Date('2024-10-10'),
      previsaoEntrega: new Date('2024-10-20'),
    },
    {
      id: 2,
      numeroOS: 'OS-2024-002',
      cliente: 'Maria Santos',
      aparelho: 'Samsung Galaxy S22',
      defeito: 'Bateria não carrega',
      status: 'aguardando_pecas',
      dataEntrada: new Date('2024-10-12'),
      previsaoEntrega: new Date('2024-10-25'),
    },
    {
      id: 3,
      numeroOS: 'OS-2024-003',
      cliente: 'Pedro Oliveira',
      aparelho: 'Xiaomi Redmi Note 11',
      defeito: 'Não liga',
      status: 'pendente',
      dataEntrada: new Date('2024-10-14'),
    },
    {
      id: 4,
      numeroOS: 'OS-2024-004',
      cliente: 'Ana Costa',
      aparelho: 'iPhone 12',
      defeito: 'Câmera não funciona',
      status: 'concluido',
      dataEntrada: new Date('2024-10-08'),
      previsaoEntrega: new Date('2024-10-15'),
    },
    {
      id: 5,
      numeroOS: 'OS-2024-005',
      cliente: 'Carlos Mendes',
      aparelho: 'Motorola Edge 30',
      defeito: 'Tela com manchas',
      status: 'entregue',
      dataEntrada: new Date('2024-10-05'),
      previsaoEntrega: new Date('2024-10-12'),
    },
    {
      id: 6,
      numeroOS: 'OS-2024-006',
      cliente: 'Juliana Ferreira',
      aparelho: 'iPhone 14',
      defeito: 'Alto-falante sem som',
      status: 'em_andamento',
      dataEntrada: new Date('2024-10-13'),
      previsaoEntrega: new Date('2024-10-18'),
    },
  ];

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      pendente: 'Pendente',
      em_andamento: 'Em Andamento',
      aguardando_pecas: 'Aguardando Peças',
      concluido: 'Concluído',
      entregue: 'Entregue',
    };
    return labels[status] || status;
  }

  getStatusSeverity(status: string): 'secondary' | 'info' | 'warn' | 'success' | 'contrast' {
    const severities: { [key: string]: 'secondary' | 'info' | 'warn' | 'success' | 'contrast' } = {
      pendente: 'secondary',
      em_andamento: 'info',
      aguardando_pecas: 'warn',
      concluido: 'success',
      entregue: 'contrast',
    };
    return severities[status] || 'secondary';
  }
}
