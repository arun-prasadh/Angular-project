import {Routes} from '@angular/router';
import {BooksComponent} from '../books/books.component';
import {ElectronicsComponent} from '../electronics/electronics.component';

export const CATALOG_ROUTES:Routes=[
    {path:"books",component:BooksComponent},
    {path:"electronics",component:ElectronicsComponent,children:[]},
]