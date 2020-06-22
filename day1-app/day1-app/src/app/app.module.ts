import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [ // what is is contained in the module --> Component, Directives,
    AppComponent, PanelComponent, SearchbarComponent, SearchComponent, ContentComponent, TableComponent
  ],
  imports: [  //module dependencies
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
