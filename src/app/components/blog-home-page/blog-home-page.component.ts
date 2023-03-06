import {Component, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post";
import {BlogService} from "../../services/blog/blog.service";

@Component({
  selector: 'app-blog-home-page',
  templateUrl: './blog-home-page.component.html',
  styleUrls: ['./blog-home-page.component.scss']
})
export class BlogHomePageComponent implements OnInit{
  posts: Post[] = [];

  constructor(private blogService: BlogService) { }

  getPosts(): void {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

}
