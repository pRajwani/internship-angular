import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  login(data):Observable<any>{
    console.log("Service called");
    console.log(data);
    return this.http.post('http://localhost:3000/users/login',data)
  }
}
