import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-order-sucess",
  templateUrl: "./order-sucess.component.html",
  styleUrls: ["./order-sucess.component.scss"],
})
export class OrderSucessComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  orderId: any;
  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get("orderId");
  }
  onContinue() {
    this.router.navigate(["/books"]);
  }
}
