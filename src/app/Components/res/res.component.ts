import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../../Services/data-exchange.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

  value: any;

  constructor() { }

  ngOnInit() {
    console.log(this.value = Object.values(DataExchangeService.getValue()));
  }

}
