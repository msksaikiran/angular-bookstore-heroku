import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { BooksComponent } from "./components/books/books.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ViewcartComponent } from "./components/viewcart/viewcart.component";
import { OrderSucessComponent } from "./components/order-sucess/order-sucess.component";
import { WhishlistComponent } from "./components/whishlist/whishlist.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";
import { GetbooksComponent } from "./components/getbooks/getbooks.component";
import { SellerdashboardComponent } from "./components/sellerdashboard/sellerdashboard.component";
import { AddbookComponent } from "./components/addbook/addbook.component";
import { UpdatebookComponent } from "./components/updatebook/updatebook.component";
import { AdmindashboardComponent } from "./components/admindashboard/admindashboard.component";
import { AdminComponent } from "./components/admin/admin.component";
import { VerifyconfrimComponent } from "./components/verifyconfrim/verifyconfrim.component";
import { DisApproveBooksComponent } from "./components/dis-approve-books/dis-approve-books.component";

const routes: Routes = [
  // {
  //   path: "register",
  //   component: RegisterComponent,
  // },
  {
    path: "login",
    component: LoginComponent,
  },
  // {
  //   path: "forgetpassword",
  //   component: ForgetpasswordComponent,
  // },
  // {
  //   path: ":role/resetpassword/:token",
  //   component: RestpasswordComponent,
  // },
  // {
  //   path: "verifybook",
  //   component: VerifyconfrimComponent,
  // },
  // {
  //   path: ":role/registration/verify/:token",
  //   component: VerifyComponent,
  // },
  {
    path: "seller/books",
    component: SellerdashboardComponent,
  },
  {
    path: "addbook",
    component: AddbookComponent,
  },
  {
    path: "update",
    component: UpdatebookComponent,
  },
  {
    path: "confrim",
    component: VerifyconfrimComponent,
  },
  {
    path: "admin",
    component: AdmindashboardComponent,
    children: [
      {
        path: "books",
        component: AdminComponent,
      },
      {
        path: "disapprovebooks",
        component: DisApproveBooksComponent,
      },
    ],
  },
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "/books", pathMatch: "full" },
      { path: "books", component: GetbooksComponent },
      //{ path: "books/search", component: SearchComponent },
      {
        path: "books/viewcart",
        //canActivate: [AuthGuardService],
        component: ViewcartComponent,
      },
      {
        path: "books/ordersucess/:orderId",
        component: OrderSucessComponent,
      },
      {
        path: "books/whishlist",
        component: WhishlistComponent,
      },
      {
        path: "books/orderdetails",
        component: OrderDetailsComponent,
      },
      // {
      //   path: "books/details/:bookId",
      //   component: RatingreviewComponent,
      // },
      // {
      //   path: "books/ratingandreview/:bookId",
      //   component: GiverateComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
