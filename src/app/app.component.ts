import { Component } from '@angular/core';
import { FavoiteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(evanrArgs:FavoiteChangedEventArgs)  {
    // console.log("favorite changed: " , evanrArgs);
  }

  tweet = {
    body:'....',
    likesCount:10,
    isLiked: true
  }
}
