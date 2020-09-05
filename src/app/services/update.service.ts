import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  update(data):Observable<any> {
    return this.http.put('http://localhost:3000/u/'+data._id,data)
  }

  constructor(private http:HttpClient) { }
}
