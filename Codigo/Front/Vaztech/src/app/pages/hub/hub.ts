import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-hub',
  imports: [MenuModule, PanelModule, RouterOutlet],
  templateUrl: './hub.html',
  styleUrl: './hub.css',
})
export class HubComponent {
  // qual a Label a ser mostrada, uma solução "temporária"
  selectedItem: string = 'Home';

  ngOnInit(): void {}

  sidebarItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: 'home',
      command: () => {
        this.selectedItem = 'Home';
      },
    },
    {
      label: 'Vendas',
      icon: 'pi pi-shop',
      routerLink: 'vendas',
      command: () => {
        this.selectedItem = 'Vendas';
      },
    },
    {
      label: 'Estoque',
      icon: 'pi pi-box',
      routerLink: 'estoque',
      command: () => {
        this.selectedItem = 'Estoque';
      },
    },
    {
      label: 'Pessoas',
      icon: 'pi pi-users',
      routerLink: 'pessoas',
      command: () => {
        this.selectedItem = 'Pessoas';
      },
    },
    {
      label: 'Financeiro',
      icon: 'pi pi-money-bill',
      routerLink: 'financeiro',
      command: () => {
        this.selectedItem = 'Financeiro';
      },
    },
    {
      label: 'Serviços',
      icon: 'pi pi-wrench',
      routerLink: 'servicos',
      command: () => {
        this.selectedItem = 'Serviços';
      },
    },
    {
      label: 'Funcionários',
      icon: 'pi pi-briefcase',
      routerLink: 'funcionarios',
      command: () => {
        this.selectedItem = 'Funcionários';
      },
    },
  ];
}
