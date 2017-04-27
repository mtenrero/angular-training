import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Book, BookService } from './book.service';

@Component({
  template: `
    <h2>BOOKS</h2>
    <ul>
      <li *ngFor="let book of books">
        <a [routerLink]="['/book', book.id]">{{book.id}} - {{book.title}}</a>
      </li>
    </ul>
    <button md-raised-button color="accent" class="text-upper" (click)="newBook()">Add Book</button>
  `
})
export class BookListComponent {

  books: Book[];

  constructor(private router: Router, service: BookService) {
    this.books = service.getBooks();
  }

  newBook() {
    this.router.navigate(['/book/new']);  }
}
