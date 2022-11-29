import { Component, OnInit } from '@angular/core';
import { icons } from './data'

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  icons = icons
  delivery = 'Доставим газ за 4 часа'
  delivery_list = 'Доставка газа всегда по актуальным ценам'
  moscow = 'в любую точку  Москвы и Московской области'
  btn = 'Заказать доставку газа в газгольдер'

  constructor() { }

  ngOnInit(): void {
  }

}
