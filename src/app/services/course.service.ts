import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Routes from '../Routes'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http:HttpClient
  ) { }

  create(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.BLOG, formData).toPromise();
  }


  update(formData: FormData, id: number): Promise<any> {
    return this.http.post<any>(`${Routes.BLOG}/${id}`, formData).toPromise();
  }

 
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.BLOG}/${id}`).toPromise();
  }

  all(): Promise<any> {
    return this.http.get<any>(Routes.BLOG).toPromise();
  }
  delete(id: number) {
    return this.http.delete(`${Routes.BLOG}/${id}`).toPromise();
  
  }
}

