import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Servicios } from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://labsys.frc.utn.edu.ar:8443/api/articulos/';
    
    //this.resourceUrl = 'https://localhost:44349/api/articulos/';
  }

  get(Nombre: string, Activo: boolean, Pagina: number) {
    let params = new HttpParams();
    if (Nombre != null) {
      params = params.append('Nombre', Nombre);
    }
    if (Activo != null) {
      // para evitar error de null.ToString()
      params = params.append('Activo', Activo.toString());
    }
    params = params.append('Pagina', Pagina.toString());

    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceUrl + Id);
  }

  post(obj: Articulo) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

  put(Id: number, obj: Articulo) {
    return this.httpClient.put(this.resourceUrl + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }
}
