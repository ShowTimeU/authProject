import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternsService } from '../../Services/patterns.service';
import { DataExchangeService } from '../../Services/data-exchange.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginFC = new FormControl('', [Validators.required, Validators.pattern(PatternsService.loginPattern)]);
  passFC = new FormControl('', [Validators.required, Validators.pattern(PatternsService.passwordPattern)]);


  authFG = new FormGroup({
    login: this.loginFC,
    pass: this.passFC
  });

  constructor() { }

  ngOnInit() {
  }

  authSubmit() {
    if (this.authFG.invalid) {
      return;
    } else {
      DataExchangeService.setValue(this.authFG.value);
      DataExchangeService.setPage('res');
    }
  }
}
