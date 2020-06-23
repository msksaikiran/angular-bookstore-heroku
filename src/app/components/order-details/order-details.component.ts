import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { Book } from "src/app/models/book";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"],
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router // private snackbar: MatSnackBar, // private userService: UserService,
  ) // private addressService: AddressService
  {}

  ngOnInit() {
    this.onOrderlist();
  }

  token: String;
  books: Array<Book> = [];
  book: Book = new Book();
  //myDatas = new Array();
  bookcount: number;
  myDatas = [
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

  orderId = new Array();
  count: number;
  onOrderlist() {
    this.count = 1;
    //   this.userService
    //     .getRequest(environment.orderlist_books + localStorage.getItem("token"))
    //     .subscribe(
    //       (Response: any) => {
    //         console.log(Response.obj);
    //         for (var len in Response.obj) {
    //           this.books = Response.obj[len];
    //           let res = this.books["booksList"];
    //           let qt = this.books["quantityOfBooks"];
    //           /**
    //            * bookdetails and its quantity details
    //            */
    //           for (var index in res) {
    //             this.count += 1;
    //             this.book = res[index]; //book details
    //             this.book.orderId = this.books["orderId"];
    //             this.book.totalPrice = qt[index]["totalprice"];
    //             this.book.quantity = qt[index]["quantityOfBook"];
    //             this.myDatas.push(this.book);
    //           }
    //         }
    //         console.log(this.myDatas);
    //       },
    //       (error: any) => {
    //         this.snackbar.open(error.error.message, "undo", { duration: 2500 });
    //       }
    //     );
  }
}
