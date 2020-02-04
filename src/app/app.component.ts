import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  desc;
  data = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000);
  });
}
