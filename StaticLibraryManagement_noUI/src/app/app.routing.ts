import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';

const appRoutes = [
  { path: 'book/new', component: BookFormComponent },
  { path: 'book/edit/:id', component: BookFormComponent },
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
