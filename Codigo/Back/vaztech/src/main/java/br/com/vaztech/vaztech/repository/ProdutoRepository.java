package br.com.vaztech.vaztech.repository;

import br.com.vaztech.vaztech.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
    Optional<Produto> findByNumeroSerie(String numeroDeSerie);
}
