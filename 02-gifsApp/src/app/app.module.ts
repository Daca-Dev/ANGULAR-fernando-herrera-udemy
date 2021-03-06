import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Local Module
import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { GifsModule } from './gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
