import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { VERSION} from '@angular/compiler'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck{
  clicked = false;
  title = `Angular ${VERSION.full} is rad!`
  boats: any = [];
  constructor(){}

  // Setup of the compnonet, Fetching from database or ApI
  ngOnInit() { 

  }

  ngAfterViewInit(): void {
      // child views loaded
  }
  
  ngDoCheck(): void {
      console.log('checked')
      // triggered constantly
  }

  // Destory component if destroy, handling preformance and memory leaks.
  ngOnDestroy(): void {
      // teardown
  }


  handleClick() : void{
   this.clicked = !this.clicked 
  }

}
