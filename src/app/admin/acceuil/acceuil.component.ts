import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponentAdmin implements OnInit {

  scriptUrl: any
  user: any
  token: any
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
      this.scriptUrl = "../../../assets/admin/js/main.js"
    this.loadScript()

    //recuperation du user
    this.user = this.authService.getUser()
    this.token = this.authService.getToken()
    if(!this.user || !this.token){
      this.router.navigate(["/admin/login"])
    }
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

  logout(){
    localStorage.clear()
    this.router.navigate(["/login"])
  }

}
