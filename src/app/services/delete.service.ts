import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  delete(id):Observable<any>{
    console.log("service called",id)
    return this.http.delete("http://localhost:3000/u/"+id);
  }
}
