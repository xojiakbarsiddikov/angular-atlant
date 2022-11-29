import {Component, Input, OnInit} from '@angular/core';
import {FooterModule} from "../../module/footer/footer";

@Component({
  selector: 'app-footer-btn',
  templateUrl: './footer-btn.component.html',
  styleUrls: ['./footer-btn.component.css']
})
export class FooterBtnComponent implements OnInit {

  @Input() footer: FooterModule


  constructor() { }

  ngOnInit(): void {
  }

}
