import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AcceuilComponentAdmin } from './admin/acceuil/acceuil.component';

import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { FormationListComponent } from './components/formation/formation-list/formation-list.component';
import { FormationViewComponent } from './components/formation/formation-view/formation-view.component';
import { LeconViewComponent } from './components/formation/lecon-view/lecon-view.component';
import { BlogAddComponent } from './admin/blog/blog-add/blog-add.component';
import { BlogViewComponent } from './admin/blog/blog-view/blog-view.component';


const routes: Routes = [
  // les routes de la partie publique
  {path:'',component:AcceuilComponent},
  {path:'course-list',component:CourseListComponent},
  {path:'course-content/:slug',component:CourseDetailComponent},
  {path:'about-us',component:AboutComponent},
  {path: 'formation-view', component: FormationViewComponent},
  {path:'formation', component: FormationListComponent},
  { path : 'formation-lecon', component: LeconViewComponent},
  // les differents routes pour la partie administration
  {path:'admin', component: AcceuilComponentAdmin},
  {path:'admin/login', component:LoginComponent},
  {path: 'admin/blog-add', component: BlogAddComponent},
  {path: 'admin/blog-list',component: BlogViewComponent},
  {path: '**', redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
