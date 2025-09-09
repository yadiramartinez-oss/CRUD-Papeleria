package com.example.crudpapeleria.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.crudpapeleria.model.Producto;
import com.example.crudpapeleria.repository.ProductoRepository;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    public Producto crearProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public Page<Producto> obtenerProductos(String q, Long categoriaId, Boolean activo, PageRequest pageRequest) {
        return productoRepository.findByNombreContainingAndCategoriaIdAndActivo(q, categoriaId, activo, pageRequest);
    }

    public Producto obtenerProductoPorId(Long id) {
        return productoRepository.findById(id).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    public Producto actualizarProducto(Long id, Producto producto) {
        Producto productoExistente = obtenerProductoPorId(id);
        productoExistente.setNombre(producto.getNombre());
        productoExistente.setSku(producto.getSku());
        productoExistente.setPrecio(producto.getPrecio());
        productoExistente.setStock(producto.getStock());
        // productoExistente.setActivo(producto.isActivo());
        return productoRepository.save(productoExistente);
    }

    public void eliminarProducto(Long id) {
        Producto producto = obtenerProductoPorId(id);
        producto.setActivo(false);
        productoRepository.save(producto);
    }
}
