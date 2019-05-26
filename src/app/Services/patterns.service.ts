import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternsService {

  constructor() { }

  static loginPattern = '[^\\s]*';
  static passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$~\\-_]{10,}$';
}
