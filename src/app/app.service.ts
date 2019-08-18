import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http.get<User>(
      `http://localhost:3000/users?login=${login}&password=${password}`
    );
  }

  getCurrentUser(id: number) {
    return this.http.get<User>(`http://localhost:3000/users?id=${id}`);
  }
}

export interface User {
  id: number;
  login: string;
  name: string;
  password: string;
  exames: Exame[];
}

export interface Exame {
  dia: string;
  data: string;
  medico: string;
  exame: string;
  show: boolean;
}
