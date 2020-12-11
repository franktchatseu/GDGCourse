import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-view',
  templateUrl: './formation-view.component.html',
  styleUrls: ['./formation-view.component.scss']
})
export class FormationViewComponent implements OnInit {

  @Input()
  formation: any;
  constructor() { }

  ngOnInit() {
  }

}
