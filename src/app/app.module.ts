import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/root/app.component';
import { AuthComponent } from './Components/auth/auth.component';
import { ResComponent } from './Components/res/res.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {HttpService} from './Services/http.service';
import {DataExchangeService} from './Services/data-exchange.service';
import {PatternsService} from './Services/patterns.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ResComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatFormFieldModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatListModule
  ],
  providers: [HttpService, DataExchangeService, PatternsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
