import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lifecylce-component';
  obj = {
    num: 0
  }

  plus() {
    this.obj.num++;
  }
}
