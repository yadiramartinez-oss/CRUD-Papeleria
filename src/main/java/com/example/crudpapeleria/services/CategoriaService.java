package com.example.crudpapeleria.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.crudpapeleria.model.Categoria;
import com.example.crudpapeleria.repository.CategoriaRepository;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    public Categoria crearCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    /*
     * public Page<Categoria> obtenerCategorias(PageRequest pageRequest) {
     * return categoriaRepository.findAll(pageRequest);
     * }
     */

    public List<Categoria> obtenerCategorias() {
        return categoriaRepository.findAll(); // Devuelve todas las categorías
    }

    public Categoria obtenerCategoriaPorId(Long id) {
        return categoriaRepository.findById(id).orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
    }

    public Categoria actualizarCategoria(Long id, Categoria categoria) {
        Categoria categoriaExistente = obtenerCategoriaPorId(id);
        categoriaExistente.setNombre(categoria.getNombre());
        categoriaExistente.setDescripcion(categoria.getDescripcion());
        categoriaExistente.setActivo(categoria.getActivo());
        return categoriaRepository.save(categoriaExistente);
    }

    public void eliminarCategoria(Long id) {
        Categoria categoria = obtenerCategoriaPorId(id);
        categoria.setActivo(false);
        categoriaRepository.save(categoria);
    }
}
