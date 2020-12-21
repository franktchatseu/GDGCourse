import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private formBuilder: FormBuilder,
    private blogServive : CourseService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.initForm()
    this.user = this.authService.getUser()
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
    console.log(this.form.body.value)
    const formData = new FormData()
    formData.append('title',this.form.title.value)
    formData.append('description',this.form.description.value)
    formData.append('category',"1")
    formData.append('body', this.form.body.value)
    formData.append('banner', this.form.image.value)
    formData.append('user_id',this.user.id)
    //creation 
    this.blogServive.create(formData).then(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
        console.log("echec ajout de article")
      }
    )

  }
}
