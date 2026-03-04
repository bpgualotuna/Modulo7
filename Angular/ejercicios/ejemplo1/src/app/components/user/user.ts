import { Component } from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-user',
  imports: [Products],
  templateUrl: './user.html',
})
export class User {
  name: string= 'Brayan';
  age: number = 26;

}
