import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample1',
  template: `
    <p>sample 1 component {{ text }}</p>
    <input type="text" #myInput>
    <button (click)="click($event, myInput.value)">자식의 버튼</button>
  `,
  styles: [
    `
      p {
        color: #feaa22;
      }
    `
  ]
})
export class Sample1Component {
  @Input() text;
  @Input() click;

  @Output() myEvent = new EventEmitter();

  ngOnInit() {
    setTimeout(() => {
      this.myEvent.emit();
    }, 2000);
  }
}