import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../Routes'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.USER}/${id}`).toPromise();
  }

  all(): Promise<any> {
    return this.http.get<any>(Routes.USER).toPromise();
  }
}
