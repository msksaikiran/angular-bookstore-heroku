import { Component, OnInit, Inject } from "@angular/core";
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-verifyconfrim",
  templateUrl: "./verifyconfrim.component.html",
  styleUrls: ["./verifyconfrim.component.scss"],
})
export class VerifyconfrimComponent implements OnInit {
  bookdata: any;
  constructor(
    public dialogRef: MatDialogRef<VerifyconfrimComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private userService: UserService,
    private router: Router
  ) {}

  book: any;
  status: any;
  ngOnInit() {
    console.log(this.data["status"]);
    this.status = this.data["status"];
    console.log(this.status);
  }

  onVerify() {
    this.dialogRef.close();
    // if (this.status == "Approve") {
    //   this.userService
    //     .putRequest("/book/bookdetails/verify?bookId=" + this.data.bookId, "")
    //     .subscribe((Response: any) => {
    //       this.dialogRef.close();
    //     });
    // } else {
    //   this.userService
    //     .putRequest(
    //       "book/bookdetails/unApproved?bookId=" + this.data.bookId,
    //       ""
    //     )
    //     .subscribe((Response: any) => {
    //       this.dialogRef.close();
    //       this.snackbar.open("book DisApprove", "ok", {
    //         duration: 2000,
    //       });
    //     });
    // }
  }
  onCancel() {
    this.dialogRef.close();
  }
}
