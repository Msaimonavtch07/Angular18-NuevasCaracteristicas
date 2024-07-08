import { Component, input, output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {

  public product = input.required<Product>();

  public onInCrementQuantity = output<number>();

  public InCrementQuantity(): void {
    this.onInCrementQuantity.emit( this.product().quantity + 1 );
  };

}
