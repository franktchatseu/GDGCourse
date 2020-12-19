import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {
  public Editor = ClassicEditor ;
  public blogForm : FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private blogServive : CourseService
  ) { }

  ngOnInit() {
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
    console.log(this.form.body.value)
    const formData = new FormData()
    formData.append('title',this.form.title.value)
    formData.append('description',this.form.description.value)
    formData.append('category',this.form.category.value)
    formData.append('body', this.form.body.value)
    formData.append('banner', this.form.image.value)
    formData.append('user_id',"1")
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
