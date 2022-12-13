import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Product} from "../../models/Product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products!: Observable<Array<Product>>;
  errorMessage!: String;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.handleSearchProduits()
  }


  handleSearchProduits() {
    this.products = this.productService.getProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

  }

  handleDeleteCategorie(c: any) {
    
  }

  handleUpdateCategorie(c: any) {
    
  }
}
