import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');// https://jsonplaceholder.typicode.com/posts
     return this.http.get('http://localhost:8080/'); // 'http://localhost:8080/viewVM.py'
  }
}
