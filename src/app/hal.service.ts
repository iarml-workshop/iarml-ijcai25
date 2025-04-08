import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HalService {
  private apiUrl = 'https://api.archives-ouvertes.fr/search/?q=ERIANA&fl=title_s,authFullName_s,producedDateY_i,uri_s,conferenceTitle_s&rows=20&sort=producedDateY_i desc'
  constructor(private http: HttpClient) { }

  getPublications(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
