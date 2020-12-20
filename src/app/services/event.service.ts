import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../Routes'; 

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(
    private http:HttpClient
  ) { }

 

  NewEvent(): Promise<any> {
    return this.http.get<any>(Routes.EVENT).toPromise();
  }
}
