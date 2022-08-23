import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(this.url + '/auth/sign-in', user);
  }

  setUserToLocalStorage(result: string){
    localStorage.setItem("token", result);
  }
  
}
