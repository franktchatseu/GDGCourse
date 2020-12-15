import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  relatedCourses: any
  tags: any;
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.relatedCourses = [
      {
        image: "assets/images/1.jpg",
        title: "The Complete Android Developer Course",
        author: "Frank Tchatseu",
        date: new Date()
      },
      {
        image: "assets/images/2.jpg",
        title: "Hacking Ethique",
        author: "Ngounou Loic",
        date: new Date()
      },
      {
        image: "assets/images/3.jpg",
        title: "Formation Flutter",
        author: "Rousvel",
        date: new Date()
      },
      {
        image: "assets/images/4.jpg",
        title: "Learn Phyton",
        author: "Luc Luc",
        date: new Date()
      },
      {
        image: "assets/images/5.jpg",
        title: "Learn Angular",
        author: "Abdel Abdel",
        date: new Date()
      },
      {
        image: "assets/images/1.jpg",
        title: "Les bases en securite informatique",
        author: "Tchamou Ramses",
        date: new Date()
      },
    ];

    //recuperatiion des tags pour cet article
    this.getTagByArticle(4)
    this.getRelatedCourse(1)
  }

  //recuperation des articles de la meme categorie
  //recuperer les articles par categories
  getRelatedCourse(category_id){
    this.courseService.articleByCategory(category_id).then(
      (data) => {
        this.relatedCourses = data;
        console.log(this.relatedCourses)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  //recuperation des tags d'un article ici on precise id de articke
  getTagByArticle(article_id){
    this.courseService.getTagsByCourse(article_id).then(
      (data)=>{
        this.tags = data
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  
}
