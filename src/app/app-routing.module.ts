import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';


const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path:'course-list',component:CourseListComponent},
  {path:'course-content',component:CourseDetailComponent},
  {path:'about-us',component:AboutComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
