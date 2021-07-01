import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "../../components/template/header/header.service"


@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.scss"],
})
export class ProductCrudComponent implements OnInit {
    constructor(private router: Router, private headerService: HeaderService) {
        headerService.headerData = {
            title: "Cadastro de produto",
            icon: "storefront",
            routerUrl: "/products"
        }
    }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
