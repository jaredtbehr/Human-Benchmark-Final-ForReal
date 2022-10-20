import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weird-game-card',
  templateUrl: './weird-game-card.component.html',
  styleUrls: ['./weird-game-card.component.css']
})
export class WeirdGameCardComponent {
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
