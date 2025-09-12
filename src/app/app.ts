import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { Categorias } from "./categorias/categorias";
import { CommonModule } from '@angular/common';
import { CategoriasService } from "./categorias/categorias.service";
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importarlo aquí


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, CommonModule, Categorias, MatDialogModule, HttpClientModule],
  providers: [CategoriasService],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App {
  protected readonly title = signal('Front-Papeleria');
  selectedOption: string = 'inicio'; 
}
