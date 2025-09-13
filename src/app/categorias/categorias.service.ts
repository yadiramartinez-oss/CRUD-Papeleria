import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly apiUrl = 'http://localhost:8080/api/categorias'; 

  constructor(private readonly http: HttpClient) {}

  addCategoria(categoria: any): Observable<any> {
    //return of({ success: true });  // Simula una respuesta exitosa
return this.http.post(this.apiUrl + '/create', categoria, { responseType: 'text' as 'json' });  
  }
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
