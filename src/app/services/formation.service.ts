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


  //recuperation d'une formation
  findFormation(slug): Promise<any> {
    return this.http.get<any>(`${Routes.FORMATION}/${slug}`).toPromise();
  }
  //recuperation d'une lecon
  findLecon(slug): Promise<any> {
    return this.http.get<any>(`${Routes.LECON}/${slug}`).toPromise();
  }
  
  //methode qui retourne les data à partir d'une page
  getPage(page): Promise<any> {
    const url = Routes.FORMATION+'?page='+page
    return this.http.get<any>(url).toPromise();
  }
   //methode qui retourne les data à partir de url
   getUrl(url): Promise<any> {
    return this.http.get<any>(url).toPromise();
  }
  create(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.BLOG, formData).toPromise();
  }

  lastestFormation(){
    return this.http.get<any>(Routes.LASTESTFORMATION).toPromise();
  
  }



  update(formData: FormData, id: number): Promise<any> {
    return this.http.post<any>(`${Routes.BLOG}/${id}`, formData).toPromise();
  }

  all(): Promise<any> {
    return this.http.get<any>(Routes.BLOG).toPromise();
  }
  delete(id: number) {
    return this.http.delete(`${Routes.BLOG}/${id}`).toPromise();
  
  }

  //recuperation des articles par categorie
  formationByCategory(category_id: number): Promise<any> {
    const url = Routes.BLOG+'category'
    return this.http.get<any>(`${url}/${category_id}`).toPromise();
  }
  
  allCategory(){
    return this.http.get<any>(Routes.CATEGORY).toPromise();
  
  }
  lastestCourse(){
    return this.http.get<any>(Routes.LASTESTBLOG).toPromise();
  
  }

  //recuperation de tous les tags articles // like html, css phyton, ...
  getAllTag(): Promise<any> {
    return this.http.get<any>(Routes.TAG).toPromise();
  }
  //reuperation de la liste des courses ar tag
  getTagsByCourse(article_id): Promise<any> {
    const url = Routes.TAG+'article'
    return this.http.get<any>(`${url}/${article_id}`).toPromise();
  }
}
