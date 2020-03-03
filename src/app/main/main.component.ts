import { Component, OnInit } from '@angular/core';
import {PostsService} from 'src/app/services/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'title Main.component.ts';
  VMs: any[];
  posts: any[];

  constructor(postsService: PostsService) {
    postsService.getPosts().subscribe(res => {
      // console.log(res)
      this.posts = res;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
