import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarComponent {

  title = 'Выберите свой объём Газовоза'
  btn = 'Заказать газ'

}
