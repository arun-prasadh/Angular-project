import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';
import { CATALOG_ROUTES } from './catalog/catalog.routing';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { HttpClientModule } from'@angular/common/http';


const routes: Routes = [
  {
    path:"", component:HomeComponent
      },
  {
path:"contact", component:ContactComponent
  },
  {
    path:"contact/:uemail", component:ContactComponent
      },    
  {
"path":"catalog", component:CatalogComponent,children:CATALOG_ROUTES
  },
  {
path:"about", component:AboutComponent
  },
  {
path:"tasks", component:TaskComponent
  },
  {
    "path":"httpDemo", component:HttpDemoComponent
      },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }




