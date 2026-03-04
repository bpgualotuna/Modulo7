import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  name: string = "Laptop";
  price: number = 1000;
  stock: number = 10;
  available: boolean = true;
}
