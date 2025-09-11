import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'; 
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { HttpClientModule } from '@angular/common/http';
import { Categorias } from "./categorias/categorias";
import { CommonModule } from '@angular/common';
import { CategoriasService } from "./categorias/categorias.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, CommonModule, HttpClientModule, Categorias, MatDialogModule],
  providers: [CategoriasService],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App {
  protected readonly title = signal('Front-Papeleria');
  selectedOption: string = 'inicio'; 
}
