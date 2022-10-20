import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
@Input() img: string;
@Input() desc: string;
@Input() cardTitle: string;
@Input() link: string;

  constructor() 
  { 
    this.img = "IMG";
    this.desc = "Blank desc";
    this.cardTitle = "Blank title";
    this.link = "Blank link";
  }

}
