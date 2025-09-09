INSERT INTO categorias (nombre, descripcion, activo) VALUES
('Papelería Escolar', 'Artículos para uso escolar', TRUE),
('Papelería de Oficina', 'Materiales para oficina y negocios', TRUE);

INSERT INTO productos (nombre, sku, precio, stock, categoria_id, activo) VALUES
('Cuaderno', 'SKU1234', 35.50, 100, 1, TRUE),
('Lapiz', 'SKU1235', 5, 29, 1, TRUE),
('Grapadora', 'SKU9101', 150.75, 50, 2, TRUE);
('Pluma', 'SKU9102', 7, 32, 2, TRUE);