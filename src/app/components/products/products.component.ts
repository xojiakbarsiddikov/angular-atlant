import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  price = 'Стоимость газа в ваш газгольдер сегодня'
  title = 'Пропан'
  car = 'Бутан'
  name = 'от 25 рублей за литр'
  description = 'Физически испарение происходит до -40 градусов, что позволяет использовать его в наших с вами погодных условиях'
  category = 'Идеальное соотношение'
  price_list = '80%'
  price_list2 = '20%'
  litr = 'от 16 рублей за литр'
  description_list = 'Испарение Бутана происходит только до 0 градусов и годится для использования в тёплое время года'
  order = 'Заказать'

  constructor() { }

  ngOnInit(): void {
  }

}
