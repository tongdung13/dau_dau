import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: any;
  productForm: any = FormGroup;
  constructor(private router: Router,
              private service: ProductService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      position: ['', [Validators.required, Validators.minLength(6)]],
      office: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required]],
      startDate: ['', [Validators.required, Validators.minLength(6)]]
    });
    console.log(this.productForm);
  }

  createProduct()
  {
    this.service.create(this.product).subscribe(
      data => {
          console.log(data);
          this.router.navigate(['']);
          this.product = new Product();
      }, error => console.log(error)
    )
  }

  onSubmit() {
    console.log(this.productForm);
  }

}
