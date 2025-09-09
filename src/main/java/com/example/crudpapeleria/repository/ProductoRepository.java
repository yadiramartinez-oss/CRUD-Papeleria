package com.example.crudpapeleria.repository;

import com.example.crudpapeleria.model.Producto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    Page<Producto> findByNombreContainingAndCategoriaIdAndActivo(String nombre, Long categoriaId, Boolean activo,
            PageRequest pageRequest);
}
