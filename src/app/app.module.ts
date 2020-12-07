import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,AcceuilComponent,CourseListComponent],
})
export class AppModule { }
