import { Injectable } from '@angular/core';
import {Post} from "../../interfaces/post";
import {POSTS} from "./mock-posts";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  getPost(postSlug: string | null): Observable<any> {
    if (POSTS.find((post => post.slug == postSlug))) {
      return of(POSTS.find((post => post.slug == postSlug)));
    } else {
      return of({});
    }
  }
}
