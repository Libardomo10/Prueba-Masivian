import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class HttpService {

    public END_POINT = '';

    constructor(private http: HttpClient) {
    }

    get(operation: string) {
        return this.http.get(this.END_POINT + operation).pipe( map(this.extractData), catchError(this.handleError));
    }

    post(operation: string, payload: any) {
        return this.http.post(this.END_POINT + operation, payload).pipe(map(this.extractData), catchError(this.handleError));
    }

    put(operation: string, payload: any) {
        return this.http.put(this.END_POINT + operation, payload).pipe(map(this.extractData), catchError(this.handleError));
    }

    delete(operation: string) {
        return this.http.delete(this.END_POINT + operation).pipe(map(this.extractData), catchError(this.handleError));
    }

    private extractData(response: any) {
        let body = response;
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body: any = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.error ? error.error : error.toString();
        }
        return throwError(errMsg);
    }
}

