import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.Emulated
  
})
export class FavoriteComponent {
  @Input('is-favorite') isSelected : boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected});
  }
}

export interface FavoiteChangedEventArgs {
  newValue : boolean
}