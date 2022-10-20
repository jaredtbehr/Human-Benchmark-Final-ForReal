import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img: string;
  @Input() desc: string;
  @Input() cardTitle: string;
  @Input() link: string;
  
  constructor() {
    this.img = "IMG";
    this.desc = "Blank Desc";
    this.cardTitle = "Blank Title";
    this.link = "Blank link";
  }  
}
