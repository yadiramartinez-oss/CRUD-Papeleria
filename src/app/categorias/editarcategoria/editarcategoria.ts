import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  activo?: boolean;
}

@Component({
  selector: 'app-editarcategoria',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './editarcategoria.html',
  styleUrls: ['./editarcategoria.css']
})
export class EditarCategoria {

  categoria: Categoria;

  nombreValido: boolean = true;
  descripcionValida: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<EditarCategoria>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria
  ) {
    this.categoria = { ...data }; // clonar para no modificar directamente
  }

  validarNombre(): void {
    const len = this.categoria.nombre.trim().length;
    this.nombreValido = len >= 3 && len <= 60;
  }

  validarDescripcion(): void {
    this.descripcionValida = this.categoria.descripcion.trim().length <= 255;
  }

  guardar(): void {
    this.validarNombre();
    this.validarDescripcion();

    if (this.nombreValido && this.descripcionValida) {
      this.dialogRef.close(this.categoria);
    }
  }

  cancelar(): void {
    this.dialogRef.close(null);
  }
}
