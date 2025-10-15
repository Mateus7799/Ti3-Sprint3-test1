import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Produto, ProdutoStatus } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  http = inject(HttpClient);
  apiRoute = 'api/produtos';

  // EM REFORMULAÇÃO
  // buscarItens(){
  //     return this.http.get<{items: ItemEstoque[], metadata: {totalItems: number, totalPages: number, currentPage: number, pageSize: number }}>(`${environment.apiURL}/api/estoque`)
  // }

  buscarStatusProdutos(): Observable<ProdutoStatus[]> {
    return this.http.get<ProdutoStatus[]>(`${environment.apiURL}/${this.apiRoute}/status`);
  }

  adicionarProduto(produto: Produto) {
    return this.http.post(`${environment.apiURL}/${this.apiRoute}`, produto);
  }
}
