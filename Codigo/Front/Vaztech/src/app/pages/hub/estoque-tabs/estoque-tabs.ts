import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';
import { Produto } from '../../../models/produto.model';
import { FormularioEstoque } from './formulario-estoque/formulario-estoque';
import { ProdutoService } from '../../../services/produto.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-estoque-tabs',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TabsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormularioEstoque,
  ],
  templateUrl: './estoque-tabs.html',
})
export class EstoqueTabsComponent {
  abaAtual: number = 0;

  produtosEdicao: Produto[] = [];
  produtos: Produto[] = [];

  produtoService = inject(ProdutoService);

  ngOnInit() {
    // EM REFORMULAÇÃO
    // this.produtoService.buscarItens().subscribe({
    //   next: (res: {
    //     items: Produto[];
    //     metadata: { totalItems: number; totalPages: number; currentPage: number; pageSize: number };
    //   }) => {
    //     this.produtos = res.items;
    //     console.log(this.produtos);
    //   },
    // });
  }

  fecharAba(index: number) {
    this.produtosEdicao.splice(index, 1);
    this.abaAtual = 0;
  }
}
