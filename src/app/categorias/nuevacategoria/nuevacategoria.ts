import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // Necesario para mat-form-field
import { MatInputModule } from '@angular/material/input'; // Necesario para matInput

@Component({
  selector: 'app-nuevacategoria',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './nuevacategoria.html',
  styleUrl: './nuevacategoria.css'
})
export class Nuevacategoria {

}
