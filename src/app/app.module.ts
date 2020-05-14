import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelistComponent } from './homelist/homelist.component';
import { SinglelisthomeComponent } from './singlelisthome/singlelisthome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomelistComponent,
    SinglelisthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
