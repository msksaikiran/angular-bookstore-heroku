import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { BooksComponent } from "./components/books/books.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ViewcartComponent } from "./components/viewcart/viewcart.component";

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
  // {
  //   path: "seller/books",
  //   component: SellerdashboardComponent,
  // },
  // {
  //   path: "admin",
  //   component: AdmindashboardComponent,
  //   children: [
  //     {
  //       path: "books",
  //       component: AdminComponent,
  //     },
  //     {
  //       path: "disapprovebooks",
  //       component: DisApprovedBooksComponent,
  //     },
  //   ],
  // },
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "/books", pathMatch: "full" },
      { path: "books", component: DashboardComponent },
      //{ path: "books/search", component: SearchComponent },
      {
        path: "books/viewcart",
        //canActivate: [AuthGuardService],
        component: ViewcartComponent,
      },
      // {
      //   path: "books/ordersucess/:orderId",
      //   component: OrderSuccessComponent,
      // },

      // {
      //   path: "books/whishlist",
      //   component: WhishlistComponent,
      // },
      // {
      //   path: "books/orderdetails",
      //   component: OrderDetailsComponent,
      // },
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
