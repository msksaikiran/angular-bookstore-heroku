import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatSidenavModule,
  MatSelectModule,
  MatListModule,
  MatTableModule,
  MatMenuModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatInputModule,
} from "@angular/material";
//import { LoginComponent } from "./login.component";
//import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatRadioModule } from "@angular/material/radio";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TestComponent } from "../test/test.component";
import { BooksComponent } from "../books/books.component";
import { GetbooksComponent } from "../getbooks/getbooks.component";
import { RouterModule, Router } from "@angular/router";
import { Test2Component } from "../test2/test2.component";
import { ViewcartComponent } from "../viewcart/viewcart.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, ViewcartComponent],

      imports: [
        MatButtonModule,
        MatIconModule,
        NgxSpinnerModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatRadioModule,
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
        MatIconModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatIconModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        //RouterModule.forRoot(RouterTestingModule)
        RouterTestingModule.withRoutes([
          {
            path: "",
            component: LoginComponent,
          },
          {
            path: "books",
            component: ViewcartComponent,
          },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
