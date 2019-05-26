import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  static page = 'auth';
  static value: any;

  constructor() { }

  static setPage(value) {
    this.page = value;
  }

  static getPage() {
    return this.page;
  }

  static getValue() {
    return this.value;
  }
  static setValue(value) {
    this.value = value;
  }
}
