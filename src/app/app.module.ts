import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './services/course.service';
import { UserService } from './services/user.service';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnerComponent } from './components/partner/partner.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseCategoryComponent } from './components/course/course-category/course-category.component';
import { CourseLatestComponent } from './components/course/course-latest/course-latest.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { AboutComponent } from './components/about/about.component';
import { FormationViewComponent } from './components/formation/formation-view/formation-view.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { CommentService } from './services/comment.service';
import { FormationService } from './services/formation.service';
import { FormationListComponent } from './components/formation/formation-list/formation-list.component';
import { LeconViewComponent } from './components/formation/lecon-view/lecon-view.component';
import { BlogViewComponent } from './admin/blog/blog-view/blog-view.component';
import { AcceuilComponentAdmin } from './admin/acceuil/acceuil.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FooterComponent,
    PartnerComponent,
    GalleryComponent,
    CourseListComponent,
    CourseCategoryComponent,
    CourseLatestComponent,
    HeaderComponent,
    CourseDetailComponent,
    AboutComponent,
    FormationViewComponent,
    LoginComponent,
    FormationListComponent,
    LeconViewComponent,
    BlogViewComponent,
    AcceuilComponentAdmin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseService,UserService, CommentService,FormationService],
  bootstrap: [AppComponent, AcceuilComponent,CourseListComponent,FormationViewComponent],
})
export class AppModule { }
