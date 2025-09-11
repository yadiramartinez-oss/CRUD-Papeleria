import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // Necesario para mat-form-field
import { MatInputModule } from '@angular/material/input'; // Necesario para matInput
import { CommonModule } from '@angular/common'; 
import { MatDialog } from '@angular/material/dialog';  // Importa MatDialog
import { Nuevacategoria } from './nuevacategoria/nuevacategoria'; // Ajusta la ruta según corresponda


export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MatTableModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})

export class Categorias implements OnInit {

  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];
  dataSource: Categoria[] = [];
  filteredDataSource: Categoria[] = [];
  searchText: string = '';

  constructor(private categoriasService: CategoriasService,
  public dialog: MatDialog) {}

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe(data => {
      this.dataSource = data;
      this.filteredDataSource = [...this.dataSource];  // Inicializamos el filtro con todas las categorías
      console.log(this.filteredDataSource);
    });
  }

  applyFilter(): void {
    const filterValue = this.searchText.toLowerCase();
    this.filteredDataSource = this.dataSource.filter(categoria =>
      categoria.nombre.toLowerCase().includes(filterValue) ||
      categoria.descripcion.toLowerCase().includes(filterValue)
    );
  }

  // Limpiar la búsqueda
  clearSearch(): void {
    this.searchText = '';
    this.applyFilter(); // Mostrar todas las categorías al limpiar
  }

  abrirFormulario(): void {
    const dialogRef = this.dialog.open(Nuevacategoria, {
      width: '600px',
      height: 'auto',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se ha cerrado');
    });
  }

  // Editar una categoría
  editarCategoria(id: number): void {
    console.log('Editar categoría con ID:', id);
    // Lógica para editar la categoría
  }

  // Eliminar una categoría
  eliminarCategoria(id: number): void {
    console.log('Eliminar categoría con ID:', id);
    // Lógica para eliminar la categoría
  }
}
