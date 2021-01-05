import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AcceuilComponentAdmin } from './admin/acceuil/acceuil.component';

import { ContactComponent } from './components/contact/contact.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { FormationListComponent } from './components/formation/formation-list/formation-list.component';
import { FormationViewComponent } from './components/formation/formation-view/formation-view.component';
import { LeconViewComponent } from './components/formation/lecon-view/lecon-view.component';
import { BlogAddComponent } from './admin/blog/blog-add/blog-add.component';
import { BlogViewComponent } from './admin/blog/blog-view/blog-view.component';


const routes: Routes = [
  // les routes de la partie publique
  {path:'',component:AcceuilComponent,runGuardsAndResolvers:'always'},
  {path:'course-list',component:CourseListComponent,runGuardsAndResolvers:'always'},
  {path:'course-content/:slug',component:CourseDetailComponent,runGuardsAndResolvers:'always'},
  {path:'about-us',component:AboutComponent,runGuardsAndResolvers:'always'},
  {path: 'formation-view/:slug', component: FormationViewComponent},
  {path:'formation', component: FormationListComponent,runGuardsAndResolvers:'always'},
  { path : 'formation/lecon/:slug', component: LeconViewComponent,runGuardsAndResolvers:'always'},
  { path: 'contact-us', component: ContactComponent ,runGuardsAndResolvers:'always'},

  // les differents routes pour la partie administration
  {
    path: 'admin',component: AcceuilComponentAdmin,runGuardsAndResolvers:'always',
    children: [
      {
        path: 'blog-add',
        component: BlogAddComponent, outlet:'admin'
      },
      {
        path: 'blog-list',
        component: BlogViewComponent,outlet:'admin'
      },
    ]
  },
  {path:'login', component:LoginComponent},
  {path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
