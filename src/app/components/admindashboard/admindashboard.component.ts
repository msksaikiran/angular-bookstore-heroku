import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar, MatDialog } from "@angular/material";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.scss"],
})
export class AdmindashboardComponent implements OnInit {
  searchText: any;
  constructor(
    private route: ActivatedRoute,

    private spinner: NgxSpinnerService,

    private snackbar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) {}

  visible: boolean;
  appName: string;
  profilepic: boolean = false;
  ngOnInit() {
    // this.data.currentMessage.subscribe((message) => {
    //   if ((message = "count")) {
    //     this.getcountofbooks();
    //   } else if ((message = "removeBook")) {
    //     this.getcountofbooks();
    //   } else if ((message = "checkout")) {
    //     this.getcountofbooks();
    //   }
    // });

    if (localStorage.getItem("token") != null) {
      this.visible = true;
      this.profilepic = true;
      this.bookcount = 1;
    } else {
      this.profilepic = false;
    }

    this.getprofileLink();
    this.profile = localStorage.getItem("userimage");
  }

  onBook() {
    this.router.navigate(["books"]);
    //this.getcountofbooks();
  }
  showSpinner = false;

  onLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(() => {
      if (localStorage.getItem("token") != null) {
        this.ngOnInit();
      }
    });
  }
  onLogout() {
    localStorage.clear();
    this.visible = false;

    this.spinner.show();
    this.showSpinner = true;

    setTimeout(() => {
      this.spinner.hide();
      this.bookcount = 0;
      //this.router.navigate(["/books"]);
      window.location.reload();
    }, 1000);
  }
  // myInput = new FormControl();
  // private obtainNotes = new BehaviorSubject([]);
  // currentMessage = this.obtainNotes.asObservable();
  searching() {
    // this.appName = "Search";
    // this.httpservice
    //   .getMethod(
    //     environment.baseUrl + "book/bookorauthorname?text=" + this.searchText,
    //     this.httpservice.httpOptions
    //   )
    //   .subscribe((response: any) => {
    //     this.obtainNotes.next(response.obj);
    //     this.router.navigate(["/books/search"]);
    //   });
  }

  bookcount: any;
  token: string;
  // placeOrder: boolean = true;

  profile: String;

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
    //       ///  console.log("upload", response);
    //     });
    // }
  }
  approve: boolean = true;
  app: boolean;
  getDisApprove() {
    this.app = true;
    this.approve = false;
    this.router.navigate(["admin/disapprovebooks"]);
  }

  getApprove() {
    this.approve = true;
    this.router.navigate(["admin/books"]);
  }
}
