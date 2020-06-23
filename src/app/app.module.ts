import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatNavList,
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatRadioModule } from "@angular/material/radio";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { LoginComponent } from "./components/login/login.component";
import { BooksComponent } from "./components/books/books.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ViewcartComponent } from "./components/viewcart/viewcart.component";
import { OrderSucessComponent } from "./components/order-sucess/order-sucess.component";
import { WhishlistComponent } from "./components/whishlist/whishlist.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";
import { GetbooksComponent } from "./components/getbooks/getbooks.component";
import { FooterComponent } from "./components/footer/footer.component";
// import { RegisterComponent } from "./components/register/register.component";
// import { FooterComponent } from "./components/footer/footer.component";
//import { RatingComponent } from "./components/rating/rating.component";
// import { GiverateComponent } from "./components/giverate/giverate.component";
// import { WhishlistComponent } from "./components/whishlist/whishlist.component";
// import { OrderDetailsComponent } from "./components/order-details/order-details.component";
// import { VerifyComponent } from "./components/verify/verify.component";
import { MatBadgeModule } from "@angular/material/badge";
import { SellerbooksComponent } from "./components/sellerbooks/sellerbooks.component";
import { AddbookComponent } from "./components/addbook/addbook.component";
import { UpdatebookComponent } from "./components/updatebook/updatebook.component";
import { SellerdashboardComponent } from "./components/sellerdashboard/sellerdashboard.component";
// import { SearchComponent } from "./components/search/search.component";
// import { SearchPipe } from "./pipes/search.pipe";
// import { DashboardComponent } from "./components/dashboard/dashboard.component";
// import { ViewCartComponent } from "./components/view-cart/view-cart.component";
// import { OrderSuccessComponent } from "./components/order-success/order-success.component";
// import { GetbooksComponent } from "./components/getbooks/getbooks.component";
// import { SortBooksPipe } from "./pipes/sort-books.pipe";
// import { MatProgressBarModule } from "@angular/material/progress-bar";
// import { ForgetpasswordComponent } from "./components/forgetpassword/forgetpassword.component";
// import { RestpasswordComponent } from "./components/restpassword/restpassword.component";
//import { CookieService, CookieOptions } from "angular2-cookie/core";
// import { AddbookComponent } from "./components/addbook/addbook.component";
// import { SellerbooksComponent } from "./components/sellerbooks/sellerbooks.component";
// import { UpdatebookComponent } from "./components/updatebook/updatebook.component";
// import { AdminComponent } from "./components/admin/admin.component";
// import { VerifyconfrimComponent } from "./components/verifyconfrim/verifyconfrim.component";
// import { RatingreviewComponent } from "./components/ratingreview/ratingreview.component";
// import { AdmindashboardComponent } from "./components/admindashboard/admindashboard.component";
// import { DisApprovedBooksComponent } from "./components/dis-approved-books/dis-approved-books.component";
// import { SellerdashboardComponent } from "./components/sellerdashboard/sellerdashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    DashboardComponent,
    ViewcartComponent,
    OrderSucessComponent,
    WhishlistComponent,
    OrderDetailsComponent,
    GetbooksComponent,
    FooterComponent,
    SellerbooksComponent,
    AddbookComponent,
    UpdatebookComponent,
    SellerdashboardComponent,
    //RegisterComponent,
    // DashboardComponent,
    // ViewCartComponent,
    // FooterComponent,
    // BooksComponent,
    // OrderSuccessComponent,
    // GetbooksComponent,
    // SortBooksPipe,
    // ForgetpasswordComponent,
    // RestpasswordComponent,
    // WhishlistComponent,
    // OrderDetailsComponent,
    // VerifyComponent,
    // SearchComponent,
    // SearchPipe,
    // AddbookComponent,
    // SellerbooksComponent,
    // UpdatebookComponent,
    // AdminComponent,
    // //RatingComponent,
    // GiverateComponent,
    // VerifyconfrimComponent,
    // RatingreviewComponent,
    // AdmindashboardComponent,
    // DisApprovedBooksComponent,
    // SellerdashboardComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    //NgxPaginationModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    //MatProgressBarModule,
    MatRadioModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatBadgeModule,
    HttpClientModule,
  ],

  providers: [],
  exports: [LoginComponent],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent],
  //providers: [BooksComponent],
  // exports: [AddbookComponent, UpdatebookComponent, LoginComponent],
  // entryComponents: [
  //   AddbookComponent,
  //   UpdatebookComponent,
  //   RatingreviewComponent,
  //   LoginComponent,
  // ],
})
export class AppModule {}
// export function cookieServiceFactory() {
//   return new CookieService();
// }
