import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponentAdmin implements OnInit {

  scriptUrl: any
  constructor() { }

  ngOnInit() {
    this.scriptUrl = "../../../assets/admin/js/main.js"
    this.loadScript()
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

}
