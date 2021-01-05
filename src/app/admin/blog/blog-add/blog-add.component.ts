import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {
  public Editor = ClassicEditor ;
  public blogForm : FormGroup
  user : any
  isLoading = false;
  isSubmitted = false;

  //recuperation de toutes les categories
  categories :  any
  constructor(
    private formBuilder: FormBuilder,
    private blogServive : CourseService,
    private authService : AuthService,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser()
    this.getAllCategories()
    this.initForm()

  }

  initForm(){
    this.blogForm = this.formBuilder.group(
      {
        'title':['',[Validators.required]],
        'description':'',
        'category':'',
        'body': '',
        'image':''
      }
    )
  }
  get form(){
    return this.blogForm.controls;
  }
  onSubmit(){
    console.log("id de la categorie est    :"+this.form.category.value)
    this.isSubmitted = true
    this.isLoading = false

     // Si la validation a echoué, on arrete l'execution de la fonction
     if (this.blogForm.invalid) {
      alert(' remplissez correctement les champs')
      return;
    }
    this.isLoading = true

    const formData = new FormData()
    formData.append('title',this.form.title.value)
    formData.append('description',this.form.description.value)
    formData.append('category',this.form.category.value)
    formData.append('body', this.form.body.value)
    formData.append('banner', this.form.image.value)
    formData.append('user',this.user.id)
    //creation 
    this.blogServive.create(formData).then(
      (data)=>{
        console.log(data)
        alert("ajout de article reussi avec success")
        this.router.navigate(['/admin',{outlets:{'admin':'blog-list'}}])
      }
    ).catch(
      (error)=>{
        console.log(error)
        alert("echec ajout de article")
      }
    ).finally(
      ()=>{
        this.isLoading = false
      }
    )

  }

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
}
