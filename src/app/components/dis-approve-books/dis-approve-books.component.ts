import { Component, OnInit } from "@angular/core";
import { MatSnackBar, MatDialog, MatDialogConfig } from "@angular/material";
import { Book } from "src/app/models/book";
import { Seller } from "src/app/models/seller";
import { VerifyconfrimComponent } from "../verifyconfrim/verifyconfrim.component";

@Component({
  selector: "app-dis-approve-books",
  templateUrl: "./dis-approve-books.component.html",
  styleUrls: ["./dis-approve-books.component.scss"],
})
export class DisApproveBooksComponent implements OnInit {
  constructor(
    // private spinner: NgxSpinnerService,
    // private route: ActivatedRoute,
    // private router: Router,
    private snackbar: MatSnackBar,
    // private httpservice: HttpService,
    // private userService: UserService,
    public dialog: MatDialog // private bookService: BookService, // private addressService: AddressService
  ) {}

  visible: boolean;
  profilepic: boolean = false;
  profile: any;
  ngOnInit() {
    if (localStorage.getItem("token") != null) {
      this.visible = true;
    } else {
      this.profilepic = false;
    }

    this.unverifiedBooks();

    this.profile = localStorage.getItem("userimage");
  }

  books = [
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
  ];
  token: String;
  //books: Array<Book> = [];
  bookdto: Seller = new Seller();
  unVerifiedBooks: [];
  unverifiedBooks() {
    // this.userService
    //   .getRequest("/book/bookdetails/unverified")
    //   .subscribe((Response: any) => {
    //     this.unVerifiedBooks = Response.obj;
    //console.log(Response.obj);
    // for (var len in Response.obj) {
    // this.userService
    //   .getRequest("seller/singleSeller/" + Response.obj[0]["sellerId"])
    //   .subscribe((Res: any) => {
    //     for (var len in Response.obj) {
    //       this.bookdto = Response.obj[len];
    //       this.bookdto.sellerName = Res.obj.sellerName;
    //       this.bookdto.sellerEmail = Res.obj.email;
    //       this.bookdto.sellerMobile = Res.obj.mobile;
    //       this.books.push(this.bookdto);
    //     }
    //   });
    //}
    // });
  }

  both: boolean = true;
  disapprove: boolean = false;
  approve: boolean = false;
  onDisApprove(book: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      bookId: book.bookId,
      status: "DisApprove",
    };
    const dialogRef = this.dialog.open(VerifyconfrimComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.books.splice(0);
    //   this.unverifiedBooks();
    // });
  }

  status: any;
  onApprove(book: any) {
    console.log(book);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      bookId: book.bookId,
      status: "Approve",
    };
    const dialogRef = this.dialog.open(VerifyconfrimComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.books.splice(0);
    //   this.unverifiedBooks();
    // });
  }

  getprofileLink() {
    // this.userService.getRequest(environment.user_profile).subscribe(
    //   (Response: any) => {
    //     this.profile = Response.obj;
    //     if (this.profile != null) {
    //       this.profilepic = true;
    //     }
    //   },
    //   (error: any) => {
    //     this.snackbar.open("", "undo", { duration: 2500 });
    //   }
    // );
  }
  file: File;
  fileChange(event: any) {
    // let reader = new FileReader();
    // if (event.target.files && event.target.files.length > 0) {
    //   this.file = event.target.files[0];
    //   let body = new FormData();
    //   body.append("file", this.file);
    //   this.httpservice
    //     .postMethod(
    //       `${environment.baseUrl + environment.PROFILE_CHANGE_OR_UPLOAD}` +
    //         "/" +
    //         localStorage.getItem("token"),
    //       body,
    //       {}
    //     )
    //     .subscribe((response: any) => {
    //       localStorage.setItem("userprofile", response["msg"]);
    //       this.profilepic = true;
    //       this.profile = response["msg"];
    //       console.log("upload", response);
    //     });
    // }
  }
}
