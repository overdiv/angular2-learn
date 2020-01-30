import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-sample4",
  template: `
    <p>
      {{ message }}
    </p>
    <button (click)="click()">Click</button>
    <input type="text" [(ngModel)]="message">
  `,
  styles: []
})
export class Sample4Component implements OnInit {
  message = "app-sample4 message";

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.message = 'Changed message!!!';
    }, 2000)
  }

  click() {
    this.message = 'Clicked Event!'
  }
}
