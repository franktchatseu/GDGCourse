import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: any = [];
  course_tmp: any = []; //
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
    private courseService: CourseService,
    private userService: UserService,
    private router: Router


  ) {

  }

  ngOnInit() {

    console.log(this.tablePage)

  
    //recuperation de tous les cours.
    this.getAllCourses(1);

    this.getAllCategories()
    this.getAllTag()
    this.getLastestCourse()
  }

  //methode de la classe course
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
        this.pageActive(page)
        this.categorySelected ="Blog List"
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
  //next page and previous page
  //methode de la classe course
  getCourseByUrl(url) {
    this.courseService.getUrl(url).then(
      (data) => {
        this.courses = data.results;
        this.course_tmp = data.results
        this.nextUrl = data.next;
        this.previousUrl = data.previous
        this.nextUrl? this.activePage = this.activePage + 1 : this.activePage = this.activePage - 1
        
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  //recuperation de toutes les categories
  getAllCategories() {
    this.courseService.allCategory().then(
      (data) => {
        this.categories = data;
        console.log(this.categories)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
  //recuperer les articles par categories
  getArticlesByCategories(category) {
    this.courseService.articleByCategory(category.title).then(
      (data) => {
        this.courses = data.posts
        this.categorySelected = category.title;

      }
    ).catch(
      (error) => {
        this.courses = [];
      }
    )
  }

  //recuperation des tags articles
  getAllTag() {
    this.courseService.getAllTag().then(
      (data) => {
        this.tags = data
      },
      (error) => {
        console.log(error)
      }
    )
  }
  //fonction qui retourne un user
  getUser(user_id) {
    this.userService.find(user_id).then(
      (data) => {
        this.tags = data
      },
      (error) => {
        console.log(error)
      }
    )
  }
  pageActive(page) {
    this.activePage = page;
  }

  // function de rech erche d'un blog
  search(event) {
    this.courses = this.course_tmp;
    this.courses = this.courses.filter(course => course.slug.toLowerCase().includes(event.target.value.toLowerCase()));
  }
    
  detailCourse(slug) {
    this.router.navigate(['/course-content/'+slug])
  }

  //recuperation de toutes les categories
  getLastestCourse() {
    this.courseService.lastestCourse().then(
      (data) => {
        this.latestCourses = data;
        console.log(this.latestCourses)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

}
