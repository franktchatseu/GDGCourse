import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-formation-view',
  templateUrl: './formation-view.component.html',
  styleUrls: ['./formation-view.component.scss']
})
export class FormationViewComponent implements OnInit {

  @Input()
  formation: any
  lecons: any
  user: any
  constructor(
    private formationService: FormationService,
    private userService: UserService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    //recuperation de la formation$
      this.lecons=[
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
    const formationSlug = this.route.snapshot.paramMap.get("slug");

    this.getFormation(formationSlug)
  }

  getFormation(slug) {
    this.formationService.findFormation(slug).then(
      (data) => {
        this.formation = data
        this.getUser(1)
      },
      (error) => {this.formation.user
        console.log(error)
      }
    )
  }

    //fonction qui retourne un user
    getUser(user_id) {
      this.userService.find(user_id).then(
        (data) => {
          this.user = data
          console.log(this.user)
        },
        (error) => {
          console.log(error)
        }
      )
    }

    detailLecon(leconUrl){
      this.router.navigate(["/formation/lecon","leconUrl"])
    }
}
