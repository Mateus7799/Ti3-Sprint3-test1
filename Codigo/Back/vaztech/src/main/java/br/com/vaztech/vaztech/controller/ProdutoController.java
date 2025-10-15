package br.com.vaztech.vaztech.controller;

import br.com.vaztech.vaztech.dto.EstoqueResponseDTO;
import br.com.vaztech.vaztech.dto.ProdutoAddRequestDTO;
import br.com.vaztech.vaztech.dto.ProdutoAddResponseDTO;
import br.com.vaztech.vaztech.dto.StatusProdutoDTO;
import br.com.vaztech.vaztech.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @PostMapping("/produto")
    public ResponseEntity<ProdutoAddResponseDTO> addProduto(@RequestBody ProdutoAddRequestDTO dto) throws RuntimeException{
            ProdutoAddResponseDTO response = produtoService.produtoAdd(dto);
            return ResponseEntity.status(201).body(response);
    }

    @GetMapping("/produto/status")
    public ResponseEntity<List<StatusProdutoDTO>> listarTodos() {
        List<StatusProdutoDTO> response = produtoService.listarStatus();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/produto")
    public ResponseEntity<EstoqueResponseDTO> listarEstoque(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size) {
//            Pageable pageable = PageRequest.of(page, size);
//            EstoqueResponseDTO response = produtoService.listarEstoqueComPaginacao(pageable);
            return null;
    }

}