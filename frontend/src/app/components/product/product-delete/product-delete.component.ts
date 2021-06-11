import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ProductService.readById(id).subscribe((prod) => {
      this.product = prod;
    });
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ProductService.delete(id).subscribe(() => {
      this.ProductService.showMessage("Produto deletado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
