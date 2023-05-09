import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-course';

  constructor(public clockService: ClockService) {
    
  }

  ngOnInit(): void {
  }

}
