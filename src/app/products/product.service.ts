import { Injectable } from "@angular/core";
import { IProduct} from './product';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService 
{
    private url: string = 'api/products/products.json';

    constructor(private http: HttpClient){

    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getObservable(): Observable<any>{
        var observable = Observable.create(
            function(observer){
                observer.next(1);
                observer.next(2);
                observer.next(3);
                setTimeout((()=>{
                    observer.next(4);
                    observer.next(5);
                    observer.next(6);
                    
                }),5000);
                setTimeout((()=>{
                    observer.next(7);
                    observer.next(8);
                    observer.next(9);
                    observer.complete();
                    
                }),5000)
                
            }
        );
        return observable;

    }


    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
    
}