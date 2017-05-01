import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  id: number;
  title: string;
  description: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute,private service: BookService) {
    this.id = activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.getBookDetails();
    }

    this.service = service;
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/book', this.id]);
  }

  save() {
    let book : Book = new Book(this.id, this.title, this.description);
    this.service.saveBook(book);
    this.router.navigate(['/books']);
  }

  getBookDetails() {
    this.service.getBook(this.id).subscribe(
      book => {
        this.title = book.title;
        this.description = book.description;
      },
      error => console.error(error)
    );
  }

}
