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

  //methode qui retourne les data à partir d'une page
  getPage(page): Promise<any> {
    const url = Routes.BLOG+'?page='+page
    return this.http.get<any>(url).toPromise();
  }
   //methode qui retourne les data à partir de url
   getUrl(url): Promise<any> {
    return this.http.get<any>(url).toPromise();
  }
  create(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.BLOG, formData).toPromise();
  }



  update(formData: FormData, id: number): Promise<any> {
    return this.http.post<any>(`${Routes.BLOG}/${id}`, formData).toPromise();
  }

 
  findCourse(slug): Promise<any> {
    return this.http.get<any>(`${Routes.BLOG}/${slug}`).toPromise();
  }

  all(): Promise<any> {
    return this.http.get<any>(Routes.BLOG).toPromise();
  }
  delete(id: number) {
    return this.http.delete(`${Routes.BLOG}/${id}`).toPromise();
  
  }

  //recuperation des articles par categorie
  articleByCategory(category): Promise<any> {
    return this.http.get<any>(`${Routes.CATEGORY}/${category}`).toPromise();
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
  //recuperation de tous les commentaires articles
  getCommentArticle(article_id){
    return this.http.get<any>(`${Routes.BLOG}/${article_id}`).toPromise();
  }

  //recuperatio de tous kes reponses articles
  allResponse(commentaire_id){
    return this.http.get<any>(`${Routes.BLOG}/${commentaire_id}`).toPromise();
  }
  //recuperation de 
}

