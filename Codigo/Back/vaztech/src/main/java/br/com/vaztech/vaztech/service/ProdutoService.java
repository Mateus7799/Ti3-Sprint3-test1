package br.com.vaztech.vaztech.service;

import br.com.vaztech.vaztech.dto.ProdutoAddRequestDTO;
import br.com.vaztech.vaztech.dto.ProdutoAddResponseDTO;
import br.com.vaztech.vaztech.dto.StatusProdutoDTO;
import java.util.List;

public interface ProdutoService {
    public ProdutoAddResponseDTO produtoAdd(ProdutoAddRequestDTO dto) throws RuntimeException;

    public List<StatusProdutoDTO> listarStatus();
}
