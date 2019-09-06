import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  public nombre;
  public post;

  constructor() { }
   public postService: PostService;
     ngOnInit() {
  }

  public enviar() {
    const post = {
     // tslint:disable-next-line:object-literal-key-quotes
     'nombre': this.nombre,
     // tslint:disable-next-line:object-literal-key-quotes
     'texto': this.post
    };
    this.postService.save(post)
       .subscribe(response => {
        console.log(response);
      });
  }
}
