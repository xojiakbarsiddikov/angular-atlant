import { Component, OnInit } from '@angular/core';
import { CardModule } from '../../module/card/card.module'
import { cards as data } from '../../data/card/card.data'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = 'Преимущества работы с нашей компанией'
  cards: CardModule[] = data
  watch = 'Благодаря нашему собственному автопарку мы можем давать гарантию, что доставим'
  watch_list = 'за 4 часа'
  btn = 'Это сильное конкурентное преимущество, которым мы дорожим'

  constructor() { }

  ngOnInit(): void {
  }

}
