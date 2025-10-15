import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { IftaLabel } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { Produto, ProdutoStatus } from '../../../../models/produto.model';
import { ProdutoService } from '../../../../services/produto.service';

@Component({
  selector: 'app-formulario-estoque',
  imports: [
    FormsModule,
    InputTextModule,
    IftaLabel,
    DatePickerModule,
    InputNumberModule,
    SelectModule,
    ButtonModule,
    TextareaModule,
  ],
  templateUrl: './formulario-estoque.html',
  styleUrl: './formulario-estoque.css',
})
export class FormularioEstoque implements OnInit {
  @Input() itemEdicao: Produto | undefined = undefined;

  @Output() fecharAba = new EventEmitter();

  produtoService = inject(ProdutoService);
  statusSelecionado: number = 0;
  opcoesStatus: ProdutoStatus[] = [];

  carregando: boolean = false;

  ngOnInit() {
    this.carregando = true;
    this.produtoService.buscarStatusProdutos().subscribe({
      next: (status: ProdutoStatus[]) => {
        this.opcoesStatus = status;
        this.carregando = false;
      },
    });
  }

  enviarFormulario(form: NgForm) {
    if (form.invalid) return;
    const item = { status: this.statusPadrao.id, ...(<Produto>form.value) };
    console.log(item);
    if (this.itemEdicao) {
      // this.editarItem(item);
      return;
    }
    this.adicionarItem(item);
  }

  adicionarItem(item: Produto) {
    this.produtoService.adicionarProduto(item).subscribe({
      next: () => {
        console.log('Adicionado!');
        this.fecharAba.emit(null);
      },
    });
  }

  private get statusPadrao() {
    const index = this.opcoesStatus.findIndex((val) => val.nome === 'EM ESTOQUE');
    return this.opcoesStatus[index];
  }

  // REFORMULAÇÃO
  // editarItem(item: Produto) {
  //   this.operacoesService.editarItemEstoque(item).subscribe({
  //     next: () => {
  //       console.log('Editado!');
  //       this.fecharAba.emit(null);
  //     },
  //   });
  // }
}
