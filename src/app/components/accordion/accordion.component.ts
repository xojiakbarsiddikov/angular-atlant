import { Component } from '@angular/core';

@Component({
  selector: 'app-accardion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  items = ['Есть ли у вас инженеры в компании?', 'Делаете ли вы отчистку газгольдера?', 'А вы не испортите газон у меня и соседей?', 'Вы предоставляете документы для субсидий?', 'Смогу ли я заказать во время праздников?'];
  expandedIndex = 0;
  title = 'Ответы на часто задаваемые вопросы'

}
