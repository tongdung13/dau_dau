import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: any;
  id!: number;
  productForm: any = FormGroup;
  constructor(
    private service: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = new Product();
    this.service.show(this.id).subscribe(
      data => {
        this.product = data;
        console.log(data);
      }, error => console.log(error)
    )

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      position: ['', [Validators.required, Validators.minLength(6)]],
      office: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required]],
      startDate: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  clickEdit()
  {
    this.service.edit(this.id, this.product).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      }, error => console.log(error)
    )
  }

  onSubmit()
  {
    console.log(this.productForm);
  }
}
