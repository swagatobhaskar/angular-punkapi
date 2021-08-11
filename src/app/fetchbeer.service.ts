import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Beer } from './BeerInterface';

@Injectable({
  providedIn: 'root'
})
export class FetchbeerService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  punkUrl = 'https://api.punkapi.com/v2/beers';

  getBeerList(): Observable<Beer>{
    return this.httpClient.get<Beer>(this.punkUrl, {responseType: 'json'})
      .pipe(
        retry(2), catchError(this.processError)
      )
  }

  getRandomBeer(): Observable<Beer>{
    return this.httpClient.get<Beer>(this.punkUrl + '/random ', {responseType: 'json'})
      .pipe(
        retry(2), catchError(this.processError)
      )
  }

  processError(err: any){
    let message = '';
    if(err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
