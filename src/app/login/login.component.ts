import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // 비동기 방식
    this.route.queryParamMap.subscribe((data => {
      console.log(data.get('url'));
      this.url = data.get('url');
    }));

    // 동기방식
    // console.log(this.route.snapshot.queryParamMap.get('url'));
    // this.url = this.route.snapshot.queryParamMap.get('url');
  }

  click() {
    console.log('login');

    setTimeout(() => {
      this.router.navigate([this.url || '']);
    }, 1000);
  }

}
