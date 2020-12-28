import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  scriptUrl: any
  scriptUrl1: any
  courses: any = [];
  course_tmp: any = [];
  latestCourses: any = [];
  categories: any;
  priorityEvent: any
  ortherEvents: any[]
  constructor(
    private courseService: CourseService,
    private eventService: EventService
  ) { }

  ngOnInit() {
     //chargement des scripts
    this.scriptUrl = "../../../assets/js/jquery.js"
    this.scriptUrl1 = "../../../assets/js/custom.js"
    this.loadScript()
    this.loadScript1()

    this.getAllCategories()
    this.getAllCourses(1)
    this.getLastestCourse()
    this.getNewEvents()
  }

  //methode de la classe course
  getAllCourses(page) {
    this.courseService.getPage(page).then(
      (data) => {
        this.courses = data.results;
        this.course_tmp = data.results
        console.log(this.courses)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  //recuperation des categories
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
  getCoursesByCategory(categoro) {
    this.courseService.getPage(1).then(
      (data) => {
        this.courses = data.results;
        this.course_tmp = data.results
        console.log(this.courses)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
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
       //recuperation de tous les evenements
       getNewEvents() {
        this.eventService.NewEvent().then(
          (data) => {
            this.ortherEvents = data.results;
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
      }

      public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = this.scriptUrl,
          node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
      public loadScript1() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = this.scriptUrl1,
          node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
}
