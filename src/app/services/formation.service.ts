import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Routes from '../Routes';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(
    private http: HttpClient
  ) { }

  //differentes methodes pour une formation
  allFormation(): Promise<any> {
    return this.http.get<any>(Routes.FORMATION).toPromise();
  }
  //recuperation d'une formation
  findFormation(slug): Promise<any> {
    return this.http.get<any>(`${Routes.FORMATION}/${slug}`).toPromise();
  }
  //recuperation d'une lecon
  findLecon(slug): Promise<any> {
    return this.http.get<any>(`${Routes.LECON}/${slug}`).toPromise();
  }
  //ar
}
