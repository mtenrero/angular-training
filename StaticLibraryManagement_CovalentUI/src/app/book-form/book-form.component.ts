import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  service: BookService;
  book: Book;

  title: string;
  description: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute, service: BookService) {
    const id = activatedRoute.snapshot.params['id'];
    if (id) {
      this.book = service.getBook(id);
      this.description = this.book.description;
      this.title = this.book.title;
    } else {
      this.book = new Book(service.newIndex(), this.title, this.description);
    }

    this.service = service;
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/book', this.book.id]);
  }

  save() {
    this.book.title = this.title;
    this.book.description = this.description;
    this.service.saveBook(this.book);
    this.router.navigate(['/books']);
  }

}
