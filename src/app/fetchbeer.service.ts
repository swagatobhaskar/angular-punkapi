import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Beer{
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number,
    unit: string
  };
  boil_volume: {
    value: number,
    unit: string
  };
  method: {
    mash_temp: [{
      temp: {
        value: number,
        unit: string
      },
      duration: number
    }];
    fermentation: {
      temp: {
        value: number,
        unit: string
      }
    };
    twist: any  // takes null
  };
  ingredients: {
    malt: [{
      name: string,
      amount: {
        value: number,
        unit: string
      }
    }];
    hops: [{
      name: string,
      amount: {
        value: number,
        unit: string
      },
      add: string,
      attribute: string
    }];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

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

  processError(err){
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
