import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss']
})
export class FormationListComponent implements OnInit {
  formations: any = [];
  formations_tmp: any = [];
  latestCourses: any = [];
  categories: any;
  categorySelected: string = "Formations List"
  urlServer: "http://localhost:8000"
  tags: any
  nbreofPage: number
  tablePage: number[] = []
  activePage: number = 1
  nextUrl: any
  previousUrl: any
  constructor(
    private formationService: FormationService,
    private userService: UserService,
    private router: Router

  ) { }

  
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
    this.getAllFormations(1);
    this.getLastestCourse()
    this.getAllCategories()
    this.getAllTag()
  }

  //methode de la classe course
  getAllFormations(page) {
    this.formationService.getPage(page).then(
      (data) => {
        this.categorySelected = "Formations List"
        for (var i = 0; i < data.count / 2; i++) {
          this.tablePage[i] = i+1;
          console.log(i)
        }
        this.formations = data.results;
        this.formations_tmp = data.results
        this.nbreofPage = this.formations.count / 2;
        this.nextUrl = data.next;
        this.previousUrl = data.previous
        console.log(this.formations)
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
  getFormationByUrl(url) {
    this.formationService.getUrl(url).then(
      (data) => {
        this.formations = data.results;
        this.formations_tmp = data.results
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
    this.formationService.allCategory().then(
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
  //recuperer les Formation par categories
  getFormationByCategories(category) {
    this.formationService.formationByCategory(category.id).then(
      (data) => {
        this.formations = data
        this.categorySelected = category.title;
        console.log(this.categorySelected)
      }
    ).catch(
      (error) => {
        this.formations = [];
      }
    )
  }

  //recuperation des tags Formation
  getAllTag() {
    this.formationService.getAllTag().then(
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
    this.formations = this.formations_tmp;
    this.formations = this.formations.filter(course => course.slug.toLowerCase().includes(event.target.value.toLowerCase()));
  }
    
  detailFormation(slug) {
    this.router.navigate(['/formation-view/'+slug])
  }

  getLastestCourse() {
    this.formationService.lastestFormation().then(
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
