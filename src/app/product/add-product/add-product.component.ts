import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProductForGroup!: FormGroup;

  constructor(private productService:ProductService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.newProductForGroup=this.fb.group({
      name:this.fb.control(null,[Validators.required,Validators.minLength(1)]),
      price:this.fb.control(null,[Validators.required,Validators.minLength(1)]),
      quantity:this.fb.control(null,[Validators.required]),
    });
  }

  handleSaveProduct() {
    let product:Product = this.newProductForGroup.value;
    this.productService.saveProduct(product).subscribe({
      next:data=>{
        alert("Product named "+product.name+" saved successfully");
        this.newProductForGroup.reset()
        //this.router.navigateByUrl("/produits");
      },error: err => {
        console.log(err);
      }
    });
  }
}
