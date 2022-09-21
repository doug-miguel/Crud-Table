import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.modele";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };
  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage("Produto Criado");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
