import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-getbooks",
  templateUrl: "./getbooks.component.html",
  styleUrls: ["./getbooks.component.scss"],
})
export class GetbooksComponent implements OnInit {
  //bookList: Array<Book> = [];
  bookList = [
    {
      bookAddedTime: "2020-06-01T11:22:34",
      bookApproveStatus: true,
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
      noOfBooks: 0,
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
  sort: any = "Sort by relevance";
  sortTech1: any = "Price : Low to High";
  sortTech2: any = "Price : High to Low";
  sortTech3: any = "Newest Arrivals";
  length: number = 0;
  pg: boolean;
  page: number = 2;
  endPage: number = 1;
  // pages: Array<Number> = [];
  pages = [
    {
      number: 1,
    },
    {
      number: 2,
    },
  ];
  constructor(
    //private bookService: BookService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.pg = true;
    this.sort;
    //this.getBooksCount();
    this.getAvailableBooks();
  }
  nextPage() {
    this.pg = false;
    this.page = this.page + 1;
    this.doSorting(this.sort);
  }
  previousPage() {
    this.pg = true;
    this.page = this.page - 1;
    this.doSorting(this.sort);
  }
  getBooksCount() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
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
  doSorting(option: any) {
    this.sort = option;
    if (option == "Sort by relevance") {
      this.sortTech1 = "Price : Low to High";
      this.sortTech2 = "Price : High to Low";
      this.sortTech3 = "Newest Arrivals";
      this.getAvailableBooksOfPage(this.page);
    }
    if (option == "Price : Low to High") {
      this.sortTech1 = "Price : High to Low";
      this.sortTech2 = "Sort by relevance";
      this.sortTech3 = "Newest Arrivals";
      // this.bookService
      //   .getBooksSortedByPriceLow(this.page)
      //   .subscribe((response: any) => {
      //     this.bookList = response["obj"];
      //   });
    }
    if (option == "Price : High to Low") {
      this.sortTech1 = "Price : Low to High";
      this.sortTech2 = "Sort by relevance";
      this.sortTech3 = "Newest Arrivals";
      // this.bookService
      //   .getBooksSortedByPriceHigh(this.page)
      //   .subscribe((response: any) => {
      //     this.bookList = response["obj"];
      //   });
    }
    if (option == "Newest Arrivals") {
      this.sortTech1 = "Price : Low to High";
      this.sortTech2 = "Price : High to Low";
      this.sortTech3 = "Sort by relevance";
      // this.bookService
      //   .getBooksSortedByArrivals(this.page)
      //   .subscribe((response: any) => {
      //     this.bookList = response["obj"];
      //   });
    }
  }
  books: [
    {
      bookAddedTime: "2020-06-01T11:22:34";
      bookApproveStatus: false;
      bookAuthor: "The Imaginater";
      bookDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata";
      bookId: 3;
      bookImage: "https://msksaikiran.s3.us-east-2.amazonaws.com/book/Silverstars.jpg";
      bookName: "Imaginate update";
      bookPrice: 2000;
      bookUpdatedTime: "2020-06-04T19:19:39";
      bookVerified: true;
      noOfBooks: 0;
      reviewRating: [];
      sellerName: "Saikiran";
    }
  ];

  getAvailableBooks() {
    // this.bookService.getAvailableBooks().subscribe((response: any) => {
    //   this.bookList = response["obj"];
    // });
  }
  getAvailableBooksOfPage(pageNo: number) {
    // this.bookService
    //   .getAvailableBooksOfPage(pageNo)
    //   .subscribe((response: any) => {
    //     this.bookList = response["obj"];
    //     this.page = pageNo;
    //   });
  }
}
