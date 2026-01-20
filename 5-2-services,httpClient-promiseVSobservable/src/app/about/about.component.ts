import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { PostsService } from '../services/posts.service';
import { IPosts } from '../interfaces/iposts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  // // function injection (better for readability)
  // private readonly _dataService2 = inject(DataService); // function injection (the same as constructor injection)
  // constructor(){
  //   this.friends = this._dataService.friends;
  // }


  private readonly _postsService = inject(PostsService); // function injection
  friends: string[] = [];
  posts: IPosts[] = [];
  postsSubscription!: Subscription;   // the same (better) >>> // postsSubscription: Subscription = new Subscription(); 

  // // constructor injection
  constructor(private _dataService: DataService){
    this.friends = this._dataService.friends;
  }
  
  ngOnInit(){
    this.getAllPosts();
  }
  
  getAllPosts(){
    this.postsSubscription = this._postsService.getPosts().subscribe({
      next: data => {
        this.posts = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => { // works only after "next" (on success)
        console.log("next worked fine, no errors");
      }
    })
  }
  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
}
