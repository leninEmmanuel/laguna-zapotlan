import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string;

  constructor() {
    this.apiUrl = environment.apiUrl;
  }
}
