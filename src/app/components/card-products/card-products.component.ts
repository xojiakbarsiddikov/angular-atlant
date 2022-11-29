import {Component, Input} from '@angular/core';
import { CardModule } from '../../module/card/card.module'

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent {

  @Input() card: CardModule;

}
