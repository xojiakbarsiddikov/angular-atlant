import {Component } from '@angular/core';
import {footers as data} from "../../data/footer/footer";
import {FooterModule} from "../../module/footer/footer";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  footers: FooterModule[] = data

  title ='Не нашли ответа на свой вопрос задайте их нашему специалисту'
  name = 'имя'
  free_text = 'Закажи прямо сейчас и получи бесплатную установку телеметрии﻿'
  number = 'Телефон'
  btn = 'Задать вопрос'
  order = 'Заказать газ'
  ofis_text = 'Посетите наш уютный офис'
  paragraf = 'где мы сможем вас полностью проконсультировать по всем  вопросам'
  question = 'ваш вопрос'
  category = 'Lorry'
  label = 'Офис'
  video = 'Видное , Белокаменное шоссе, 20'
  phone ='Телефон:'
  text_phone = '+7 926 330-68-34'
  description = 'Синий Грузовик'
  list = 'Политика конфиденциальности'
  item = 'Согласие на обработку персональных данных'
  delively = 'Доставим газ за 4 часа'
  lists = 'Заказать доставку газа'
  show = false

  openDialog() {
    let body = document.querySelector('body')
    // @ts-ignore
    body.classList.toggle('active')
    this.show = true
  }

  closeDialog() {
    let body = document.querySelector('body')
    // @ts-ignore
    body.classList.remove('active')
    this.show = false
  }

}
