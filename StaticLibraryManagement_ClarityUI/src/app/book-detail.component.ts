import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  templateUrl: './book-detail.component.html'
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
