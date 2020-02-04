import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "app component!!!";
  isVisible: boolean = true;
  list: { title: string, desc: any }[] = [
    {
      title: 'title1',
      desc: 'desc1'
    },
    {
      title: 'title2',
      desc: 'desc2'
    },
  ];
  style = {
    color: 'green',
    backgroundColor: 'yellow'
  };
  highlightColor = 'aqua';
}
