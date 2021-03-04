import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadspinComponent } from './loadspin/loadspin.component';


const appnavg:Routes=[
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  {path: "general" ,component: GeneralComponent },
  { path: "education", component: EducationComponent},
  { path: "hobbies", component: HobbiesComponent },
  { path: "login", component: LoginComponent },
  { path: "page", component: PageComponent },
  { path:"**",redirectTo:"/page"}
];
@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    EducationComponent,
    HobbiesComponent,
    LoginComponent,
    HomeComponent,
    PageComponent,
    LoadspinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appnavg)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
