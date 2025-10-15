package br.com.vaztech.vaztech.dto;

import java.time.LocalDate;
import java.util.List;

public class EstoqueResponseDTO {
    private List<EstoqueItemDTO> items;
    private PaginacaoMetadataDTO metadata;

    public EstoqueResponseDTO() {}

    public EstoqueResponseDTO(List<EstoqueItemDTO> items, PaginacaoMetadataDTO metadata) {
        this.items = items;
        this.metadata = metadata;
    }

    public List<EstoqueItemDTO> getItems() {
        return items;
    }

    public void setItems(List<EstoqueItemDTO> items) {
        this.items = items;
    }

    public PaginacaoMetadataDTO getMetadata() {
        return metadata;
    }

    public void setMetadata(PaginacaoMetadataDTO metadata) {
        this.metadata = metadata;
    }

    // DTO para item individual do estoque
    public static class EstoqueItemDTO {
        private Integer id;
        private String numeroDeSerie;
        private String modelo;
        private String produto;
        private Integer custo;
        private String descricao;
        private Integer fornecedorId;
        private LocalDate dataEntrada;
        private String observacoes;
        private String status;
        private String cor;

        public EstoqueItemDTO() {}

        public EstoqueItemDTO(Integer id, String numeroDeSerie, String modelo, String produto,
                             Integer custo, String descricao, Integer fornecedorId,
                             LocalDate dataEntrada, String observacoes, String status, String cor) {
            this.id = id;
            this.numeroDeSerie = numeroDeSerie;
            this.modelo = modelo;
            this.produto = produto;
            this.custo = custo;
            this.descricao = descricao;
            this.fornecedorId = fornecedorId;
            this.dataEntrada = dataEntrada;
            this.observacoes = observacoes;
            this.status = status;
            this.cor = cor;
        }

        // Getters e Setters
        public Integer getId() { return id; }
        public void setId(Integer id) { this.id = id; }

        public String getNumeroDeSerie() { return numeroDeSerie; }
        public void setNumeroDeSerie(String numeroDeSerie) { this.numeroDeSerie = numeroDeSerie; }

        public String getModelo() { return modelo; }
        public void setModelo(String modelo) { this.modelo = modelo; }

        public String getProduto() { return produto; }
        public void setProduto(String produto) { this.produto = produto; }

        public Integer getCusto() { return custo; }
        public void setCusto(Integer custo) { this.custo = custo; }

        public String getDescricao() { return descricao; }
        public void setDescricao(String descricao) { this.descricao = descricao; }

        public Integer getFornecedorId() { return fornecedorId; }
        public void setFornecedorId(Integer fornecedorId) { this.fornecedorId = fornecedorId; }

        public LocalDate getDataEntrada() { return dataEntrada; }
        public void setDataEntrada(LocalDate dataEntrada) { this.dataEntrada = dataEntrada; }

        public String getObservacoes() { return observacoes; }
        public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }

        public String getCor() { return cor; }
        public void setCor(String cor) { this.cor = cor; }
    }

    // DTO para metadados da paginação
    public static class PaginacaoMetadataDTO {
        private long totalItems;
        private int totalPages;
        private int currentPage;
        private int pageSize;

        public PaginacaoMetadataDTO() {}

        public PaginacaoMetadataDTO(long totalItems, int totalPages, int currentPage, int pageSize) {
            this.totalItems = totalItems;
            this.totalPages = totalPages;
            this.currentPage = currentPage;
            this.pageSize = pageSize;
        }

        public long getTotalItems() { return totalItems; }
        public void setTotalItems(long totalItems) { this.totalItems = totalItems; }

        public int getTotalPages() { return totalPages; }
        public void setTotalPages(int totalPages) { this.totalPages = totalPages; }

        public int getCurrentPage() { return currentPage; }
        public void setCurrentPage(int currentPage) { this.currentPage = currentPage; }

        public int getPageSize() { return pageSize; }
        public void setPageSize(int pageSize) { this.pageSize = pageSize; }
    }
}