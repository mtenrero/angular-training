import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {

  title : string;
  description : string; 
  id: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BookService) {
    this.id = activatedRoute.snapshot.params['id'];
    this.getBook(this.id);
  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }

  edit() {
    this.router.navigate(['/book/edit', this.id]);
  }

  remove() {
    this.service.remove(this.id).subscribe(
      book => this.gotoBooks()
    );
  }

  getBook(id) {
    this.service.getBook(id).subscribe(
      book => {
        this.title = book.title;
        this.description = book.description;
      },
      error => console.error(error)
    );
  }
}