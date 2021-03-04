import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { SucessComponent } from './sucess/sucess.component';
import { FailComponent } from './fail/fail.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    SucessComponent,
    FailComponent,
    GameComponent,
    OddComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
