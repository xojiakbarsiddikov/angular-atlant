import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  home = 'Расправь плечи'
  list_home = 'в теплом доме'
  phone = '+7 926 330-68-34'
  question = 'Срочный вопрос'


  constructor() {}
}
