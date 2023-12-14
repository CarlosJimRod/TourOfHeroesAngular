import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroesDetailComponent } from './componentes/heroes-detail/heroes-detail.component';
import { MessageComponent } from './componentes/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
