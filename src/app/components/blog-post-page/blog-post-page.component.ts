import {Component, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post";
import {BlogService} from "../../services/blog/blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit{
  post?: any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  getPost(postSlug: string | null): void {
    this.blogService.getPost(postSlug).subscribe(post => {
      if (Object.keys(post).length === 0) {
        this.post = null;
      } else {
        this.post = post
      }
    });
  }

  ngOnInit() {
    let postSlug = this.route.snapshot.paramMap.get('postSlug');
    this.getPost(postSlug);
  }
}
