import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BooksComponent } from './books/books.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TaskComponent,
    ContactComponent,
    CatalogComponent,
    BooksComponent,
    ElectronicsComponent,
    HomeComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
