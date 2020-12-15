import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: any;
  latestCourses: any;
  categories: any;
  urlServer: "http://localhost:8000"
  tags: any
  comments: any
  responses: any

  constructor(
    private courseService: CourseService,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.courses = [
      {
        image: "assets/images/1.jpg",
        title: "The Complete Android Developer Course",
        author: "Frank Tchatseu",
        date: "20/12/2020"
      },
      {
        image: "assets/images/2.jpg",
        title: "Hacking Ethique",
        author: "Ngounou Loic",
        date: "20/12/2020"
      },
      {
        image: "assets/images/3.jpg",
        title: "Formation Flutter",
        author: "Rousvel",
        date: "20/10/2020"
      },
      {
        image: "assets/images/4.jpg",
        title: "Learn Phyton",
        author: "Luc Luc",
        date: "10/02/2020"
      },
      {
        image: "assets/images/5.jpg",
        title: "Learn Angular",
        author: "Abdel Abdel",
        date: "27/12/2021"
      },
      {
        image: "assets/images/1.jpg",
        title: "Les bases en securite informatique",
        author: "Tchamou Ramses",
        date: "20/12/2020"
      },
    ];
    
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
    //this.getAllCourses();
    this.getAllCategories()
    this.getAllTag()
  }

  //methode de la classe course
  getAllCourses() {
    this.courseService.all().then(
      (data) => {
        this.courses = data;
        console.log(this.courses)
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
  getArticlesByCategories(category_id){
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
  getAllTag(){
    this.courseService.getAllTag().then(
      (data)=>{
        this.tags = data
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  //fonction qui retourne un user
  getUser(user_id){
    this.userService.find(user_id).then(
      (data)=>{
        this.tags = data
      },
      (error)=>{
        console.log(error)
      }
    )
  }
   
}
