import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem} from './searchitem';
import { Observable } from "rxjs";
import {
  map,
  tap,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";


@Injectable()
export class SearchService {

  apiRoot:string = 'https://itunes.apple.com/search';
  results:SearchItem[];
  loading:boolean;

  constructor(private http: HttpClient) { }

  doSearch(term:string) {
    let promise = new Promise((resolve, reject) =>{
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      
      this.http.get(apiURL).toPromise()
      .then(
        (
        (data:any)=>{
        this.results = data.results;
        
        }
        ),
        msg =>{
          console.log(msg);
          reject(msg);
        }
      )
      
      

    });
    return promise;
  }

}


