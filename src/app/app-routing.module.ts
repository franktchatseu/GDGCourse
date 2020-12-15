import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { FormationViewComponent } from './components/formation/formation-view/formation-view.component';


const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path:'login', component:LoginComponent},
  {path:'course-list',component:CourseListComponent},
  {path:'course-content',component:CourseDetailComponent},
  {path:'about-us',component:AboutComponent},
  {path: 'formation', component: FormationViewComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
