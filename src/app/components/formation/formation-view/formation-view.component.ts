import { Component, Input, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-view',
  templateUrl: './formation-view.component.html',
  styleUrls: ['./formation-view.component.scss']
})
export class FormationViewComponent implements OnInit {

  @Input()
  formation: any;
  constructor(
    private formationService: FormationService
  ) { }

  ngOnInit() {

    //recuperation de la formation$
    this.formation = {
      user: "Frank Tchatseu",
      category : "Web",
      description: "il s'agit d'une tres bonne formation",
      whyLearn: "Learn C++, the games industry standard language Develop strong and transferrable problem solving skills. Gain an excellent knowledge of modern game development. ",
      requirement: "Base en HTML et JAVAscipt",
      lecons:[
        {
          title: "Introduction au Html",
          slug : "intor",
          number: 1,

        },
        {
          title: "Introduction au Html",
          slug : "intor",
          number: 2,

        },
        {
          title: "Introduction au Html",
          slug : "intor",
          number: 3,

        },
        {
          title: "Introduction au Html",
          slug : "intor",
          number: 4,

        },
        {
          title: "Introduction au Html",
          slug : "intor",
          number: 5,

        },
      ]

    }
  }

  getFormation(slug) {
    this.formationService.findFormation(slug).then(
      (data) => {
        this.formation = data
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
