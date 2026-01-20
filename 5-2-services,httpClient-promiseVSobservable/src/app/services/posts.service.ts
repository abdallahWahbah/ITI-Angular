import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../interfaces/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // don't forget to add "provideHttpClient(withFetch())" in providers [] in app.config.ts 

  constructor(private httpClient: HttpClient) { } // constructor injection

  getPosts(): Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
