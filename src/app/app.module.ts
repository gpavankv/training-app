import { HttpService } from "./services/http.service";
import { AppRoutingModule } from './app-routing.module';
import { BasicHighlightDirective } from './basic-highlight-directive/basic-highlight.directive';
import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { HomeComponent } from './home/home.component';
import { DataShareService } from './services/data-share.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    BasicHighlightDirective,
    ThirdComponent,
    FourthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    DataShareService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
