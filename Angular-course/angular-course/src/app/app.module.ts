import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagnifierDirective } from './magnifier.directive';
import { YearPipe } from './year.pipe';
import { BoatComponent } from './boat/boat.component';
import { CoolModule } from './cool/cool.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagnifierDirective,
    YearPipe,
    BoatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
