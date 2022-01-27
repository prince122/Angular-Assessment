import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// const url = 'https://serpapi.com/playground'

const url = 'https://api.pexels.com/v1/search'

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  constructor(public http: HttpClient) { }

  // 563492ad6f9170000100000173b56e5cea4840fca1b1be4c3d351262
      // https://www.c-sharpcorner.com/article/google-pexel-photo-search-using-angular-8/

  getSearchImage(key,page_no):Observable<any>{
  
    const header = new HttpHeaders({
      'Authorization':'563492ad6f9170000100000173b56e5cea4840fca1b1be4c3d351262' 
    })
    const params = new HttpParams().set("query",key).set('per_page','10').set('page',page_no)
      return this.http.get(url,{headers:header,params:params});
      // .pipe(catchError(this.handelError));
  }

}


