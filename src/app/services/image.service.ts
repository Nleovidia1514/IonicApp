import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

import { Image } from "../Image";


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url = environment.url;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getImages = (): Observable<Image[]> => {
    console.log('loco')
    return this.http.get<Image[]>(this.url + '/images?page=home').pipe(
      map(result => result['images'])
    );
  }

}
