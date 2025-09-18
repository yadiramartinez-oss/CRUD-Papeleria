import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common'; 
import { MatDialog } from '@angular/material/dialog'; 
import { Nuevacategoria } from './nuevacategoria/nuevacategoria'; 
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { EditarCategoria } from './editarcategoria/editarcategoria';



export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MatTableModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule, HttpClientModule],
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})

export class Categorias implements OnInit {

  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];
  dataSource: Categoria[] = [];
  filteredDataSource: Categoria[] = [];
  searchText: string = '';

  constructor(private readonly categoriasService: CategoriasService,
  public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }


  cargarCategorias(): void {
    this.categoriasService.getCategorias().subscribe(data => {
      const categoriasActivas = data.filter(categoria => categoria.activo === true);
      
      this.dataSource = categoriasActivas;
      
      this.ordenarCategorias();
      this.applyFilter();
    });
  }


  ordenarCategorias(): void {
    this.dataSource.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  applyFilter(): void {
    const filterValue = this.searchText.trim().toLowerCase();
    if (!filterValue) {
      this.filteredDataSource = [...this.dataSource];
    } else {
      this.filteredDataSource = this.dataSource.filter(categoria =>
        categoria.nombre.toLowerCase().includes(filterValue) ||
        categoria.descripcion.toLowerCase().includes(filterValue)
      );
    }
  }
  

  clearSearch(): void {
    this.searchText = '';
    this.applyFilter();
  }


  abrirFormulario(): void {
    console.log('El modal se ha abierto');
    const dialogRef = this.dialog.open(Nuevacategoria, {
      width: '600px',
      height: 'auto',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se ha cerrado');
      this.cargarCategorias();
    });
  }

  editarCategoria(id: number): void {
    this.categoriasService.getCategoriaById(id).subscribe({
      next: (categoria) => {
        const dialogRef = this.dialog.open(EditarCategoria, {
          width: '600px',
          data: categoria
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.categoriasService.updateCategoria(result.id, result).subscribe({ 
              next: () => {
                this.cargarCategorias();
              },
              error: (err) => {
                console.error('Error al actualizar categoría:', err);
                alert('No se pudo actualizar la categoría. Intenta nuevamente.');
              }
            });
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener categoría:', err);
        alert('No se pudo cargar la categoría para editar.');
      }
    });
  }


  eliminarCategoria(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '350px',
      data: { message: '¿Estás seguro que deseas eliminar esta categoría?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoriasService.deleteCategoria(id).subscribe({
          next: () => {
            console.log('Categoría eliminada,', id);
            this.cargarCategorias();
          },
          error: (err) => {
            console.error('Error al eliminar categoría con id:', id, "El error es: ", err);
            alert('No se pudo eliminar la categoría. Intenta nuevamente o contacta al administrador.');
          }
        });
      }
    });
  }
}
