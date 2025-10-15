// export type ItemEstoqueStatus = 'EM ESTOQUE' | 'VENDIDO' | 'ATENÇÃO';

export type ProdutoStatus = {
  id: number;
  nome: string;
};

export type Produto = {
  numeroSerie: string;
  aparelho: string;
  modelo?: string;
  observacoes?: string;
  status?: number;
  cor?: string;
};
