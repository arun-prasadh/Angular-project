import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDemoService {

  constructor(private http:HttpClient) { }
  getUser():Observable<any>{  //http methods return observable
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
