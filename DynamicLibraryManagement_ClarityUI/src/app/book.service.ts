import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

  addBook(book: Book) {
    let bodyString    = JSON.stringify(book);
    let headers       = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    console.log(bodyString);

    return this.http.post(this.url, bodyString, options)
                      .map(response => response.json());
  }

  update(book: Book) {
    let bodyString    = JSON.stringify(book);
    let headers       = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    return this.http.put(this.url + book.id, bodyString, options).map(response => response.json());
  }

  remove (id: number) {
    return this.http.delete(this.url + id).map(response => console.log(response));
  }
}
