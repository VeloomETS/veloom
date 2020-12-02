import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoVariablesService {
  membersUrl = 'https://drive.google.com/uc?id=1tMmEgbl6zMH1xbptjWs-EGJExTyOsaGv';

  constructor(private http: HttpClient) {
  }

  getInfoMembre(): Observable<any> {
    return this.http.get(this.membersUrl,{
      withCredentials: true,
    });
  }
}
