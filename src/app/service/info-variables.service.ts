import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoVariablesService {

  constructor(private http: HttpClient) { }

  getInfoMembre(): Observable<any> {
    return this.http.get('assets/membres.json');
  }
}
