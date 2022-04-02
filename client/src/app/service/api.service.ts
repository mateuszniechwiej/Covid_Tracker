import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http'
import { Observable } from 'rxjs';
import { Covid } from '../models/covid.model';


const baseUrl = 'http://127.0.0.1:8000/api/countries'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Covid[]> {
    return this.http.get<Covid[]>(`${baseUrl}/`);
  }
  get(id: any): Observable<Covid> {
    return this.http.get(`${baseUrl}/${id}/`);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}/`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
