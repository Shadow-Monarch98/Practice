import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HomeComponent } from './home/home.component';
import { HomelComponent } from './homel/homel.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageComponent } from './page/page.component';

const routes:Routes=[
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
    { path: "homel", component: HomelComponent },
  {path: "anime" ,component: AnimeListComponent  },
  { path: "manga", component: MangaListComponent },
  { path: "info", component: InfoComponent },
  { path: "login", component: LoginComponent },
  { path: "page", component:  PageComponent},
  { path:"**",redirectTo:"/page"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
