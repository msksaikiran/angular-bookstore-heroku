import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-whishlist",
  templateUrl: "./whishlist.component.html",
  styleUrls: ["./whishlist.component.scss"],
})
export class WhishlistComponent implements OnInit {
  constructor(
    private snackbar: MatSnackBar,
    //private data: DataService,
    //private userService: UserService,
    //private bookService: BookService,
    private _matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.BookCount();
    this.onwhishlist();
  }

  books = [
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "SilverStar",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
  ];

  addToCart(book: any) {
    // this.bookService.addToCart(book.bookId).subscribe((response: any) => {
    //   console.log(response["obj"]);
    //   this.onRemove(book);
    //   this.data.changeMessage("count");
    //   this._matSnackBar.open("Book added to cart", "ok", {
    //     duration: 1000,
    //   });
    // });
  }

  bookcount: number;
  BookCount() {
    this.bookcount = 1;
    // this.userService.getRequest(environment.whishList_book_count).subscribe(
    //   (Response: any) => {
    //     //console.log(Response);
    //     this.bookcount = Response.obj;
    //     this.snackbar.open(Response.message, "undo", { duration: 2500 });
    //   },
    //   (error: any) => {
    //     console.error(error);
    //     console.log(error.error.message);
    //     this.snackbar.open(error.error.message, "undo", { duration: 2500 });
    //   }
    // );
  }

  token: String;
  //books: Array<Book> = [];

  book: Book = new Book();
  quantitylist: [];
  bookee: any;
  bookincart: number;
  myDatas = new Array();
  onwhishlist() {
    // this.userService.getRequest(environment.whishlist_books).subscribe(
    //   (Response: any) => {
    //     // console.log(Response);
    //     this.books = Response.obj;
    //     //console.log(this.books);
    //     this.snackbar.open(Response.message, "undo", { duration: 2500 });
    //   },
    //   (error: any) => {
    //     this.snackbar.open(error.error.message, "undo", { duration: 2500 });
    //   }
    // );
  }

  count: boolean = true;
  onRemove(book: any) {
    // console.log(book);
    // this.token = localStorage.getItem("token");
    // this.userService
    //   .deleteRequest(
    //     environment.whishlist_books_remove + this.token + "/" + book.bookId,
    //     ""
    //   )
    //   .subscribe(
    //     (Response: any) => {
    //       //console.log(Response);
    //       this.books = Response.obj;
    //       //console.log(this.books);
    //       this.bookcount -= 1;
    //       this.count = false;
    //       this.snackbar.open(Response.message, "undo", { duration: 2500 });
    //     },
    //     (error: any) => {
    //       this.snackbar.open(error.error.message, "undo", { duration: 2500 });
    //     }
    //   );
  }
}
