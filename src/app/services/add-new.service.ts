import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewService {

  constructor(private http:HttpClient) { }

  createNew(data):Observable<any>{
    return this.http.post('http://localhost:3000/',data);
  }
}
