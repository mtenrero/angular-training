import { Http, Response } from '@angular/http';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


export class Book {
  constructor(public id: number, public title: string, public description: string) { }
}

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  url = 'http://localhost:3000/book/'; 

  getBooks() {
    return this.http.get(this.url).map(
      response => response.json()
    );
  }

  getBook(id: number) {
    return this.http.get(this.url + id).map(
      response => response.json()
    );
  }

  saveBook(nbook: Book) {
  }
}
