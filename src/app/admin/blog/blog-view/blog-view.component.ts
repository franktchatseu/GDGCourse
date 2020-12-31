import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  courses: any = [];
  course_tmp: any = [];
  latestCourses: any = [];
  categories: any;
  categorySelected: "Blog List"
  urlServer: "http://localhost:8000"
  tags: any
  comments: any
  responses: any
  nbreofPage: number
  tablePage: number[] = []
  activePage: number = 1
  nextUrl: any
  previousUrl: any
  constructor(
    private router: Router,
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.getAllBlogByUser(user.id)
  }

  addPage(){
    this.router.navigate(['/admin/blog-add'])
  }

  /*getAllBlogByUser(user_id) {
    this.courseService.getBlogByUser(user_id).then(
      (data) => {
        this.courses = data.posts;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }*/
  getAllBlogByUser(user_id) {
    this.courseService.getPage(1).then(
      (data) => {
        this.courses = data.results;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  // function de recherche d'un blog
  search(event) {
    this.courses = this.course_tmp;
    this.courses = this.courses.filter(course => course.slug.toLowerCase().includes(event.target.value.toLowerCase()));
  }
}
