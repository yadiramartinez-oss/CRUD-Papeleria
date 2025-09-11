import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = 'http://localhost:8080/api/categorias'; 

  constructor(private http: HttpClient) {}

  
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getCategoriaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/editar/${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
