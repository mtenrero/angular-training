import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Book, BookService } from './book.service';

@Component({
  templateUrl: './book-list.component.html'
})
export class BookListComponent {

  books: Book[] = [];

  constructor(private router: Router, private service: BookService) { 
    this.getBooks();
  }

  newBook() {
    this.router.navigate(['/book/new']);  
  }

  getBooks() {
    this.service.getBooks().subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }
}
