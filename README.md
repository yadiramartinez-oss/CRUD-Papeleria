# CRUD-Papeleria

## Descripción
Este proyecto es una aplicación que utiliza **Spring Boot 3** para el backend y **Angular 14** con **Angular Material** y **Bootstrap** para el frontend.

## Requisitos
  ### Backend (Spring Boot 3)
  - JDK 17 o superior
  - Maven (o usar `./mvnw` para ejecutar sin Maven instalado)
  
  ### Frontend (Angular 14)
  - Node.js v16.x o superior
  - npm (que viene con Node.js)
  
  ### Base de Datos
  - MySQL

## Puertos
  - **Backend**: `http://localhost:8080`
  - **Frontend**: `http://localhost:4200`

## Configuración de Base de Datos
  CREATE DATABASE Papeleria;
  USE Papeleria;
  
  CREATE TABLE categorias (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(60) UNIQUE NOT NULL,
      descripcion TEXT,
      activo BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  CREATE TABLE productos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) UNIQUE NOT NULL,
      sku VARCHAR(30) UNIQUE NOT NULL,
      precio DECIMAL(10, 2) CHECK (precio >= 0),
      stock INT CHECK (stock >= 0),
      categoria_id INT,
      activo BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (categoria_id) REFERENCES categorias(id)
  );
  
  SELECT * FROM categorias;
  SELECT * FROM productos;
