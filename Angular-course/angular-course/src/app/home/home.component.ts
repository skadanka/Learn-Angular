import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';
import { VERSION} from '@angular/compiler'
import { Observable, of } from 'rxjs'

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
    // of - import from 'rxjs' add Observable pattern to Objects, supports arrays as parameters - object = of([...])
    // add event listners
    this.boats = of([
      {
        name: 'StarFire',
        year: 1995,
        img: '/assets/img1.avif'
      },
      {
        name: 'BlackPearl',
        year: 1885,
        img: '/assets/img4.avif'
      }
    ])
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
