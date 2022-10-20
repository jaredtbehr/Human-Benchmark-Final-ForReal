import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent {

@Input() img: string
@Input() desc: string
@Input() cardTitle: string
@Input() link: string

  constructor() {
    this.img = "IMG";
    this.desc = "Blank Desc";
    this.cardTitle = "Blanke Title";
    this.link = "Blank Link";
   }
}
