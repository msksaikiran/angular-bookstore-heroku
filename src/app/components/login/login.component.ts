import { Component, OnInit, Input, Inject } from "@angular/core";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Login } from "src/app/models/login";
import { MatSnackBar, MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
//import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  /**
   * login object about consist of
   * 1)email
   * 2)password feilds
   */
  login: Login = new Login();
  loginForm: FormGroup;
  token: string;

  email = new FormControl(this.login.mailOrMobile, [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
  ]);
  password = new FormControl(this.login.password, [
    Validators.required,
    Validators.minLength(8),
  ]);
  showSpinner = false;
  person = String;
  constructor(
    private snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private snackbar: MatSnackBar,
    //private http: HttpClient,
    //private httpservice: HttpService,
    //private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent> //private data: DataService
  ) {}

  ngOnInit() {
    this.login.mailOrMobile = "msaikiran@gmail.com";
    this.login.password = "Saikiran";
  }
  /**
   * Email validation
   */
  getErrorEmail() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
  /**
   * Password Validation
   */
  getErrorPassword() {
    return this.password.hasError("required")
      ? "You must enter a value"
      : this.password.hasError("password")
      ? "Min 6 Elements"
      : "";
  }
  diableRadios = true;
  favoriteSeason: string = "user";
  seasons = ["user", "seller", "admin"];
  isDisabled: boolean = true;
  onlogin() {
    this.spinner.show();
    this.showSpinner = true;
    setTimeout(() => {
      this.spinner.hide();
      this.snackbar.open("Login SuccessFully", "undo", { duration: 2000 });
      if (this.favoriteSeason == "user") {
        localStorage.setItem("token", "dfdsfdgfdgfdgfd");
        this.dialogRef.close();
        this.router.navigate(["books"]);
      }
      if (this.favoriteSeason == "seller") {
        localStorage.setItem("token", "dfdsfdgfdgfdgfd");
        this.dialogRef.close();
        this.router.navigate(["seller/books"]);
      } else if (this.favoriteSeason == "admin") {
        localStorage.setItem("token", "dfdsfdgfdgfdgfd");
        this.dialogRef.close();

        this.router.navigate(["admin/books"]);
      }
    }, 2000); //spinner
  }
}
