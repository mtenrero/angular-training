import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { routing } from './app.routing';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [AppComponent, BookDetailComponent, BookListComponent, BookFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  bootstrap: [AppComponent],
  providers: [BookService]
})
export class AppModule { }

