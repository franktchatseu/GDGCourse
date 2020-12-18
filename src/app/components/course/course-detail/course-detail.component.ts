import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { CommentService } from 'src/app/services/comment.service';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: any
  relatedCourses: any
  tags: any;
  commentCourses: any
  user: any
  commentName: string = ""
  commentEmail: string = ""
  commentBody: string = ""
  constructor(
    private courseService: CourseService,
    private commentService: CommentService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
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

    
    const course_slug = this.route.snapshot.paramMap.get("slug");
    this.getCourse(course_slug)

    //related course
    this.getRelatedCourse(1)
    //recuperatiion des commentaires pour cet article

    this.AllCommentByArticle(course_slug)
    //RECUP USER
    //console.log(this.course.user_id)
    this.getUser(1)
  }

  getCourse(course_slug) {
    this.courseService.findCourse(course_slug).then(
      (data) => {
        this.course = data;
        console.log(this.course)
      }
    ).catch(
      (error) => {
        console.log(error);
        //this.router.navigate(['/course-list'])
      }
    )
  }
  getUser(user_id) {
    this.userService.find(user_id).then(
      (data) => {
        this.user = data;
        console.log(this.user)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
  //recuperer les articles par categories
  getRelatedCourse(category_id) {
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
  AllCommentByArticle(course_slug) {
    this.commentService.allCommentByCourse(course_slug).then(
      (data) => {
        this.commentCourses = data.comment
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addComment() {
    const newComment = {
      slugCourse: this.course.slug,
      name: this.commentName,
      email: this.commentEmail,
      body: this.commentBody
    }
    console.log(newComment)
    this.commentService.addComment(newComment).then(
      (data) => {
        console.log(data)
        this.cleanFieds()
        this.AllCommentByArticle(this.course.slug)

      },
      (error) => {
        console.log(error)
      }
    )
  }

  //methode qui vide les champs du formulaire
  cleanFieds() {
    this.commentName = "";
    this.commentEmail = "";
    this.commentBody = ""
  }
}
