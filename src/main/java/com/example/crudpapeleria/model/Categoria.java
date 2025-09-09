package com.example.crudpapeleria.model;

import jakarta.persistence.*;
import java.util.Set;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "El nombre no puede estar vacío")
    @Size(min = 3, max = 60, message = "El nombre debe tener entre 3 y 60 caracteres")
    @Column(name = "nombre", unique = true, nullable = false, length = 60)
    private String nombre;

    @Column(name = "descripcion", length = 255)
    private String descripcion;

    @Column(name = "activo")
    private Boolean activo;

    @OneToMany(mappedBy = "categoria")
    private Set<Producto> productos;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    public Set<Producto> getProductos() {
        return productos; // CORREGIDO: Usar "Producto" con P mayúscula
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos; // CORREGIDO: Usar "Producto" con P mayúscula
    }
}
