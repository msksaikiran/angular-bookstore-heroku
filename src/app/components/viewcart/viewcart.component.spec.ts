import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewcartComponent } from "./viewcart.component";
import { NgModule } from "@angular/core";

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

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

import { MatBadgeModule } from "@angular/material/badge";
import { BrowserModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from "../login/login.component";

describe("ViewcartComponent", () => {
  let component: ViewcartComponent;
  let fixture: ComponentFixture<ViewcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcartComponent, LoginComponent],
      imports: [
        BrowserModule,
        MatDialogModule,
        //AppRoutingModule,
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
            path: "log",
            component: LoginComponent,
          },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
