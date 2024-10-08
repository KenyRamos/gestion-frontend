import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamo } from './reclamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  private baseUrl="https://web-backend-b9cxcpawaxbreqdu.canadacentral-01.azurewebsites.net/api/v1/reclamos";
  constructor(private httpClient: HttpClient) { }
  

  obtenerListaReclamo():Observable<Reclamo[]>{
    return this.httpClient.get<Reclamo[]>(`${this.baseUrl}`);
  }
}
