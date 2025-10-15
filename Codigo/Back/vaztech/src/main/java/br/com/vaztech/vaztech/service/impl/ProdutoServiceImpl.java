package br.com.vaztech.vaztech.service.impl;

import br.com.vaztech.vaztech.dto.ProdutoAddRequestDTO;
import br.com.vaztech.vaztech.dto.ProdutoAddResponseDTO;
import br.com.vaztech.vaztech.dto.StatusProdutoDTO;
import br.com.vaztech.vaztech.entity.Produto;
import br.com.vaztech.vaztech.entity.StatusProduto;
import br.com.vaztech.vaztech.repository.ProdutoRepository;
import br.com.vaztech.vaztech.repository.StatusProdutoRepository;
import br.com.vaztech.vaztech.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    private final ProdutoRepository repository;

    @Autowired
    private final StatusProdutoRepository StatusProdutoRepository;

    @Override
    public ProdutoAddResponseDTO produtoAdd(ProdutoAddRequestDTO dto) throws RuntimeException{
        try {
        Produto produto = new Produto();
        produto.setNumeroSerie(dto.numeroSerie());
        produto.setAparelho(dto.aparelho());
        produto.setModelo(dto.modelo());
        produto.setCor(dto.cor());
        produto.setObservacoes(dto.observacoes());

        StatusProduto status = StatusProdutoRepository.findById(dto.status())
                .orElseThrow(() -> new RuntimeException("Status não encontrado com ID: " + dto.status()));

        produto.setStatus(status);

        repository.save(produto);

        return new ProdutoAddResponseDTO();
        } catch (Exception e) {
            throw new RuntimeException("Erro na criação de produto: " + e.getMessage());
        }
    }

    @Override
    public List<StatusProdutoDTO> listarStatus() {
        return StatusProdutoRepository.findAll()
                .stream()
                .map(status -> new StatusProdutoDTO(status.getId(), status.getNome()))
                .toList();
    }
}