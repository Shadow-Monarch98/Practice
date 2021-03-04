import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadspinComponent } from './loadspin/loadspin.component';
import { PageComponent } from './page/page.component';
import { HomelComponent } from './homel/homel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AnimeListComponent,
    MangaListComponent,
    LoginComponent,
    HomeComponent,
    InfoComponent,
    LoadspinComponent,
    PageComponent,
    HomelComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
