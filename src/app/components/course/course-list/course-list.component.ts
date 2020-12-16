import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: any = [];
  course_tmp: any = [];
  latestCourses: any = [];
  categories: any;
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

  ) {

  }

  ngOnInit() {

    console.log(this.tablePage)

    this.latestCourses = [
      {
        image: "assets/images/t-1.jpg",
        title: "Concept des Rest Api"
      },
      {
        image: "assets/images/t-2.jpg",
        title: "Learn React Js"
      },
      {
        image: "assets/images/t-3.jpg",
        title: "Learn React Native"
      },
      {
        image: "assets/images/t-4.jpg",
        title: "Learn Phyton for Data Science"
      },
    ]
    //recuperation de tous les cours.
    this.getAllCourses(1);

    this.getAllCategories()
    this.getAllTag()
  }

  //methode de la classe course
  getAllCourses(page) {
    this.courseService.getPage(page).then(
      (data) => {

        for (var i = 0; i < data.count / 2; i++) {
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
  getArticlesByCategories(category_id) {
    this.courseService.articleByCategory(category_id).then(
      (data) => {
        this.courses = data
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
}
