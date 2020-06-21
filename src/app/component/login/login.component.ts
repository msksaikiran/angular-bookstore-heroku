import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Book } from "src/app/models/whish";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  value: String;
  book: Book = new Book();
  ngOnInit() {
    console.log("***********" + this.book.bookId);
    this.value = environment.GET_BOOKS_COUNT;
  }
}
