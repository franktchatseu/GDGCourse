import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifService } from 'src/app/services/notif.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  scriptUrl: any

  loginForm: FormGroup;
  unknowError = false;
  isLoading = false;
  notLogged = false;
  //
  isLoginError = false;
  isLoginSuccess = false;
  keepMeLoggedIn = false;
  isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notifService: NotifService,

    
  ) { }

  ngOnInit() {
    this.scriptUrl = "../../../assets/admin/js/main.js"
    this.loadScript()
    this.initForm()
    this.notifService.danger("echec authentificaiton")
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

  initForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.unknowError = false;
    this.isLoginError = false;
    this.isLoginSuccess = false;
    this.isLoading = false
    // Si la validation a echoué, on arrete l'execution de la fonction
    if (this.loginForm.invalid) {
      this.notifService.danger("bien remplir vos champs")
      return;
    }

    this.isLoading = true;
    let user = {
      'username': this.form.username.value,
      'password': this.form.password.value,
  }
    this.authService.login(user)
      .then(resp => {
        this.authService.saveRoles(resp.roles);
        this.authService.saveToken(resp.token);
        this.authService.saveUser(resp.user);
        this.notifService.success('La connexion a reussie')
        this.router.navigate(['/admin']);
      })
      .catch(err => {
        console.log(err)
        this.notifService.danger("echec authentificaiton")
      })
      .finally(() => this.isLoading = false);
  }
  
}
