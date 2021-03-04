import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8000/api/products";
  constructor(private http: HttpClient) { }

  all()
  {
    return this.http.get(`${this.baseUrl}`);
  }

  show(id: number)
  {
    return this.http.get(`${this.baseUrl}/show/${id}`);
  }

  create(data: any)
  {
    return this.http.post(`${this.baseUrl}`, data);
  }

  edit(id: number, data: any)
  {
    return this.http.put(`${this.baseUrl}/edit/${id}`, data);
  }

  delete(id: number)
  {
    return this.http.delete(`${this.baseUrl}/destroy/${id}`);
  }
}
