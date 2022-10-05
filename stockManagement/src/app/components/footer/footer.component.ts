import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  today = new Date();
  time: number = Date.now();
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now();
      console.log(this.today);
    }, 1000);
  }
}
