import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Book, BookService } from './book.service';

@Component({
  templateUrl: './book-list.component.html'
})
export class BookListComponent {

  books: Book[];

  constructor(private router: Router, service: BookService) {
    this.books = service.getBooks();
  }

  newBook() {
    this.router.navigate(['/book/new']);  }
}
