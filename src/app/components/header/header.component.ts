import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  headerTitle: any = "header title";

  scriptUrl: any
  scriptUrl1: any
  constructor() { }

  ngOnInit() {
     //chargement des scripts
     this.scriptUrl = "../../../assets/js/jquery.js"
     this.scriptUrl1 = "../../../assets/js/custom.js"
     this.loadScript()
     this.loadScript1()
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
