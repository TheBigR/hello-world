import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarserviceService } from './carservice.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {SecondmoduleModule} from './secondmodule/secondmodule.module';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    SecondmoduleModule
  ],
  providers: [CarserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
