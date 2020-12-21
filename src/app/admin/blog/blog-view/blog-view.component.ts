import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.getAllCourses(1)
  }

  addPage(){
    this.router.navigate(['/admin/blog-add'])
  }

  getAllCourses(page) {
    this.courseService.getPage(page).then(
      (data) => {

        for (var i = 0; i < data.count / 6; i++) {
          this.tablePage[i] = i+1;
          console.log(i)
        }
        this.courses = data.results;
        this.course_tmp = data.results
        this.nbreofPage = this.courses.count / 2;
        this.nextUrl = data.next;
        this.previousUrl = data.previous
        console.log(this.courses)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  // function de rech erche d'un blog
  search(event) {
    this.courses = this.course_tmp;
    this.courses = this.courses.filter(course => course.slug.toLowerCase().includes(event.target.value.toLowerCase()));
  }
}
