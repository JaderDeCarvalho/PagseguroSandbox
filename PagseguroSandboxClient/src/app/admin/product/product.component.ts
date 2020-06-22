import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateProduct() {
    console.log('Editando produto!');
  }

  removeProduct() {
    console.log('Removendo produto!');
  }
}
