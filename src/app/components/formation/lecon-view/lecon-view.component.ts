import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { CourseService } from 'src/app/services/course.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-lecon-view',
  templateUrl: './lecon-view.component.html',
  styleUrls: ['./lecon-view.component.scss']
})
export class LeconViewComponent implements OnInit {
  course: any
  relatedCourses: any
  tags: any;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private leconService: FormationService
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


    const lecon_url = this.route.snapshot.paramMap.get("slug");
    this.getLecon(lecon_url)
    //related course
    this.getRelatedCourse(1)
    //recuperatiion des commentaires pour cet article

    //this.AllCommentByArticle(course_slug)
  }

  getLecon(lecon_url){
    this.leconService.findLecon(lecon_url).then(
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

}
