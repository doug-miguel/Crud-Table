import { ChangeDetectionStrategy } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
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
    id: 0,
    name: "",
    price: null,
  };

  error!: boolean;

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    if (this.product.name !== "" && this.product.price !== null) {
      this.ProductService.create(this.product).subscribe(() => {
        this.ProductService.showMessage("Produto Criado");
        this.router.navigate(["/products"]);
        this.error = false;
      });
    } else {
      this.ProductService.showMessage("Preencha os dados");
      this.error = true;
    }
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
