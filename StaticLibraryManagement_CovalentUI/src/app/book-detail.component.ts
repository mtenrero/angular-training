import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  template: `
  <h2>{{book.title}}</h2>
  <div>
    <label>Id: </label>{{book.id}}
  </div>
  <div>
    <label>Description: </label>{{book.description}}
  </div>
  <p>
    <button (click)="gotoBooks()">Back</button>
    <button (click)="edit()">Edit</button>
  </p>`
})
export class BookDetailComponent {

  book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute, service: BookService) {
    const id = activatedRoute.snapshot.params['id'];
    this.book = service.getBook(id);
  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }

  edit() {
    this.router.navigate(['/book/edit', this.book.id]);
  }
}
