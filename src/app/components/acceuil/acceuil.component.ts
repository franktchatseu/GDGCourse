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
  ourDepartments: any
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

    this.ourDepartments = [
      {
        'icon': "assets/svg/robot-design.svg",
        'title':"Machine Learning Department",
        'description': "Le Machine Learning est une technologie d’intelligence artificielle permettant aux ordinateurs d’apprendre sans avoir été programmés explicitement à cet effet. Pour apprendre et se développer, les ordinateurs ont toutefois besoin de données à analyser et sur lesquelles s’entraîner."
      },
      {
        'icon': "assets/svg/mobile-phone.svg",
        'title':"Mobile Development Department",
        'description': "Qui dit smartphone ou tablette dit bien sûr application mobile. Vous savez ces petites pastilles qu'on retrouve chez tout le monde, qui permettent de jouer, consulter ses mails, naviguer sur les réseaux sociaux, etc. Nous allons nous appesantir sur les technologies( Flutter , Kotlin , java)"
      },
      {
        'icon':"assets/svg/responsive.svg",
        'title':"Web Department",
        'description':"Apparu avec Internet, le développement web fait référence au processus d’écriture d’un site ou d’une page web dans un langage technique. Il s’agit d’une étape incontournable pour qu’un contenu soit mis en ligne et atteigne ses lecteurs.Nous allons nous appesantir sur les langage(nodeJs , python-django , angular , react js ……). tout en revenant sur les bases (HTML , CSS ) et les framework tout autour ."
      },
      {
        'icon':"assets/svg/graphic-design.svg",
        'title':"UX/UI Design Department",
        'description':"’UI design correspond au design de l’interface utilisateur, c’est-à-dire au design en général : les couleurs, la mise en page, les formes, les visuels, etc. A l’inverse, l’UX design n’est pas uniquement focalisé sur le design : la priorité est l’expérience utilisateur. Il s’agit d’anticiper les attentes des visiteurs, de rendre l’interface la plus ergonomique, intuitive, facile d’utilisation possible, en se basant sur les ressentis des users."
      },
      {
        'icon':"assets/svg/icon-database.svg", 
        'title':"DataBase Department",
        'description':"Une base de données, permet de stocker et de retrouver des données structurées, semi-structurées ou des données brutes ou de l'information, souvent en rapport avec un thème ou une activité ; celles-ci peuvent être de natures différentes et plus ou moins reliées entre elles. Nous allons nous appesantir sur les technologies (FireStore , Mongo DB  , redis)."
      },
      {
        'icon':"assets/svg/icon-hack.png", 
        'title':"Computer Security and Hacking Department",
        'description':"La sécurité informatique consiste à protéger un système informatique contre toute violation, intrusion, dégradation ou vol de données au sein du système d’information."
      },
      {
        'icon':"assets/svg/deep-icon.png", 
        'title':"Deep Learning Department",
        'description':"Le deep learning ou apprentissage profond est un type d' intelligence artificielle dérivé du machine learning (apprentissage automatique) où la machine est capable d'apprendre par elle-même, contrairement à la programmation où elle se contente d'exécuter à la lettre des règles prédéterminées."
      },
      {
        'icon':"assets/svg/icon-algo.png", 
        'title':"Algorithm Department",
        'description':"L'algorithmique est l'étude et la production de règles et techniques qui sont impliquées dans la définition et la conception d'algorithme, c'est-à-dire de processus systématiques de résolution d'un problème permettant de décrire précisément des étapes pour résoudre un problème algorithmique."
      }
    ]
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

      getSubDescription(content:string){
        return content.substring(0,200)+'...'
      }
}
