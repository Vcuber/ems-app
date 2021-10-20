import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const authAPI = 'http://localhost:8080/api/auth/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseUrl: string = 'http://localhost:8080/api/auth';
  // constructor(private httpClient: HttpClient) { }

  // public createUser(users: Users) {
  //   return this.httpClient.post(`${this.baseUrl}/signup/`, users);
  // }

  constructor(private http: HttpClient) {}

  register(user: { username: any; email: any; password: any; role: any; }): Observable<any> {
    return this.http.post(authAPI+'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }, httpOptions);
  }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(authAPI+'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

}
