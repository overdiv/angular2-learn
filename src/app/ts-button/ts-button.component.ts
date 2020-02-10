import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: ['./ts-button.component.scss']
})
export class TsButtonComponent implements OnInit {
  message = '버튼이 눌리지 않았다.';
  disabledSet = false;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.message = '버튼이 방금 눌렸다.';
    this.disabledSet = true;
    setTimeout(() => {
      this.message = '버튼이 눌리지 않았다.';
      this.disabledSet = false;
    }, 5000);
  }

}
