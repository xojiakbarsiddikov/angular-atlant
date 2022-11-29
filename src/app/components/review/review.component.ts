import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { EffectCards } from "swiper";
import Swiper from "swiper";

SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewComponent {
  blue = 'Синий'
  red = 'Красный'
  yellow = 'Жёлтый'
  green = 'Зелёный'
  black = 'Чёрный'
  city = 'Красногорск'
  description = 'Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.'
  review = 'Отзывы наших клиентов'

  constructor() {
  }

  ngOnInit(): void {
  }

}
