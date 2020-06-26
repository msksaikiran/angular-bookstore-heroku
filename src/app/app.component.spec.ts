import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
//import { AppComponent } from "./app.component";
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
import { AdmindashboardComponent } from "./components/admindashboard/admindashboard.component";
import { AdminComponent } from "./components/admin/admin.component";
import { DisApproveBooksComponent } from "./components/dis-approve-books/dis-approve-books.component";
import { VerifyconfrimComponent } from "./components/verifyconfrim/verifyconfrim.component";
import { TestComponent } from "./components/test/test.component";
//import { RouterTestingModule } from "@angular/router/testing";

xdescribe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeAll(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        //BooksComponent,
        //DashboardComponent,
        // ViewcartComponent,
        // OrderSucessComponent,
        // WhishlistComponent,
        // OrderDetailsComponent,
        // GetbooksComponent,
        // FooterComponent,
        // SellerbooksComponent,
        // AddbookComponent,
        // UpdatebookComponent,
        // SellerdashboardComponent,
        // AdmindashboardComponent,
        // AdminComponent,
        // DisApproveBooksComponent,
        // VerifyconfrimComponent,
        TestComponent,
        RouterTestingModule,
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
        RouterTestingModule.withRoutes([
          {
            path: "",
            component: LoginComponent,
          },
        ]),
      ],
    }).compileComponents();
  }));

  // let component: AppComponent;
  // let fixture: ComponentFixture<AppComponent>;

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });

  // it("should create the app", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'herokudeploy'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual("herokudeploy");
  // });

  // it("should render title in a h1 tag", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("h1").textContent).toContain(
  //     "Welcome to herokudeploy!"
  //   );
  // });
});
