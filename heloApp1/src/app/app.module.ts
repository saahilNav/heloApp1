import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HomeComponent } from './home/home.component';
import { ImageArrayComponent } from './image-array/image-array.component';
import { HttpClient } from '@angular/common/http';
import { ImageLoadDDirective } from './image-load-d.directive';
export const routes:Routes=[

  {
    path:'',
    pathMatch: "full",
    redirectTo: "home"
  },
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'student' ,
    component:StudentComponent
  },
  {
    path:"student-details",
    component:StudentDetailsComponent
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent,
    SimpleFormComponent,
    HomeComponent,
    ImageArrayComponent,
    ImageLoadDDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClient
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
