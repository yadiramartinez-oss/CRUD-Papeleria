console.log('Presion 0.1');  // Esto se imprimirá primero en la consola

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Para ngModel
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';  // Necesario para mat-form-field
import { MatInputModule } from '@angular/material/input';  // Necesario para matInput
import { CategoriasService } from '../categorias.service';  // Asegúrate de importar el servicio
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule aquí
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevacategoria',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, HttpClientModule],
  templateUrl: './nuevacategoria.html',
  styleUrls: ['./nuevacategoria.css']  // Corregí la propiedad styleUrl a styleUrls
})


export class Nuevacategoria {

  nombre: string = 'Hola';
  descripcion: string = '';
static {
    console.log('Presion 0.1');  // Este log se ejecutará cuando se cargue la clase
  }
  //categoriasService: any;

  constructor(
    private readonly http: HttpClient,
    private readonly dialogRef: MatDialogRef<Nuevacategoria>,
    private readonly categoriasService: CategoriasService 
  ) {}

  guardar(): void {
    console.log('Presion1');

    if (this.nombre && this.descripcion) {
      const nuevaCategoria = {
        nombre: this.nombre,
        descripcion: this.descripcion
      };
      console.log('Enviando nueva categoría:', nuevaCategoria);

      // Usamos el servicio para guardar la nueva categoría
      console.log('Llamando al servicio addCategoria');
      this.categoriasService.addCategoria(nuevaCategoria).subscribe({
        next: (response: any) => {
          console.log('Categoría guardada', response);
          this.dialogRef.close();  // Cerramos el modal
        },
        error: (error: any) => {
          console.error('Error al guardar la categoría:', error);
          console.error('Detalles del error:', error?.error || error?.message || error);
          alert('Ocurrió un error al guardar la categoría. Revise la consola para más detalles.');
        },
        complete: () => {
          // Puedes agregar alguna acción cuando la suscripción esté completa (si es necesario)
        }
      });

    } else {
      alert('Por favor complete todos los campos');
    }
  }
}
