import { Component, OnInit } from '@angular/core';

import { Product } from './_models/Product';
import { ProductService } from './_service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log('Obtendo lista de produtos do BD');
  }

  updateProduct() {
    console.log('Editar produto!');
  }

  removeProduct() {
    console.log('Remover produto!');
  }

  saveProduct() {
    console.log('Salvar produto!');
    this.productService.getWeatherForecast().subscribe(response => {
      console.log(response.toString());
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    console.log('Cancelar inserção!');
    this.product = new Product();
  }
}
