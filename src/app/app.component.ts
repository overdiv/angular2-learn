import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';

  click = (e, val) => {
    console.log(e, val)
    this.title = '자식으로부터 실행됨';
  }

  newEvent() {
    this.title = '자식이 발생한 이벤트에 의해 실행됨';
  }
}
