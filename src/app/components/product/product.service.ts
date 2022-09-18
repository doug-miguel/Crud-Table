import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "./product.modele";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) {}
  baseUrl: string = "http://localhost:3000/products";

  showMessage(msg: string): void {
    this.MatSnackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
}
