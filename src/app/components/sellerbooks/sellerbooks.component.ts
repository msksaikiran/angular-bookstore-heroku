import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { Book } from "src/app/models/book";
import { AddbookComponent } from "../addbook/addbook.component";
import { UpdatebookComponent } from "../updatebook/updatebook.component";

@Component({
  selector: "app-sellerbooks",
  templateUrl: "./sellerbooks.component.html",
  styleUrls: ["./sellerbooks.component.scss"],
})
export class SellerbooksComponent implements OnInit {
  bookList = [
    {
      bookApproveStatus: false,
      bookAuthor: "Steve krung",
      bookDescription: "dsfdsfggfgfdgf",
      bookId: 1,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Image%2011%402x.png",
      bookName: "Dont Make me to Think",
      bookPrice: 3000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      isAdded: false,
      isListed: false,
      noOfBooks: 29,
      reviewRating: [
        {
          rating: 4,
          ratingReviewId: 1,
          review: "vgvjvvjvjvjjhjgcjg",
          userName: "saikiran",
        },
      ],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "Naryan Sir",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/bridgelabzs.png",
      bookName: "BridgeLabzs update ",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 2,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Image%207%402x.png",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "Silver",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "SilverStar",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 10,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Jack jon",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Image%2022%402x.png",
      bookName: "Share Pointer",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 50,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Dummies",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Image%2023%402x.png",
      bookName: "UX Dummies",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 10,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Harry",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/harry.jpg",
      bookName: "The HarryPotter",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 10,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The jack",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/david.jpg",
      bookName: "The Jack Son",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 0,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "Chandrakala",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/LongSleep.jpg",
      bookName: "Notification",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 20,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The JudeSon",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage: "https://msksaikiran.s3.us-east-2.amazonaws.com/book/jude.jpg",
      bookName: "The Jude",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 30,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "Heighter",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/wuthering.jpg",
      bookName: "The wuthering",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 30,
      reviewRating: [],
      sellerName: "Saikiran",
    },
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: false,
      bookAuthor: "The Imaginater",
      bookDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
      bookId: 3,
      bookImage:
        "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg",
      bookName: "Imaginate update",
      bookPrice: 2000,
      bookUpdatedTime: "2020-06-04T19:19:39",
      bookVerified: true,
      noOfBooks: 20,
      reviewRating: [],
      sellerName: "Saikiran",
    },
  ];
  pages = [
    {
      number: 1,
    },
    {
      number: 2,
    },
  ];
  //bookList: Array<Book> = [];
  sort: any = "Tap here to add books";
  sortTech1: any = "Price : Low to High";
  sortTech2: any = "Price : High to Low";
  sortTech3: any = "Newest Arrivals";
  length: number = 0;
  page: number = 1;
  view: any;
  direction: string = "row";
  message: string;
  endPage: number = 1;
  // pages: Array<Number> = [];
  constructor(
    //private bookService: BookService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private router: Router //private data: DataserviceService, //private viewservice: ViewserviceService
  ) {}

  ngOnInit() {
    this.sort;

    this.getBooksCount();
    this.getAvailableBooks();
  }

  getBooksCount() {
    // this.bookService.getBooksCount().subscribe((response: any) => {
    //   this.length = response["obj"];
    //   if (this.length > 10) {
    //     for (var i = 1; i <= this.length / 12 + 1; i++) {
    //       this.pages[i] = i;
    //     }
    //     this.endPage = this.pages.length - 2;
    //   }
    // });
  }

  addbook() {
    const dialogRef = this.dialog.open(AddbookComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.getAvailableBooks();
    });
  }
  updatebook(book: any) {
    const dialogRef = this.dialog.open(UpdatebookComponent, {
      data: {
        bookName: book.bookName,
        bookAuthor: book.bookAuthor,
        bookPrice: book.bookPrice,
        noOfBooks: book.noOfBooks,
        bookDescription: book.bookDescription,
        bookId: book.bookId,
      },
    });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result.data);
    //   this.getAvailableBooks();
    // });
  }
  getAvailableBooks() {
    // this.bookService.getAvailableSellerBooks().subscribe((response: any) => {
    //   this.bookList = response["obj"].reverse();
    // });
  }
  getAvailableBooksOfPage(pageNo: number) {
    // this.bookService
    //   .getAvailableBooksOfPageFromSeller(pageNo)
    //   .subscribe((response: any) => {
    //     this.bookList = response["obj"];
    //     this.page = pageNo;
    //   });
  }
  nextPage() {
    this.page = this.page + 1;
    this.getAvailableBooksOfPage(this.page);
  }
  previousPage() {
    this.page = this.page - 1;
    this.getAvailableBooksOfPage(this.page);
  }
}
