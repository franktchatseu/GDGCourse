import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Routes from '../Routes';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  addComment(newComment): Promise<any> {
    return this.http.post<any>(Routes.COMMENT, newComment).toPromise();
  }
  addResponse(newResponse): Promise<any> {
    return this.http.post<any>(Routes.RESPONSE, newResponse).toPromise();
  }
  allCommentByCourse(course_slug): Promise<any> {
    return this.http.get<any>(`${Routes.COMMENT}/${course_slug}`).toPromise();
  }
}
