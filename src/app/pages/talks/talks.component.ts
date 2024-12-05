import {Component} from '@angular/core';
import {CardComponent} from "../../core/card/card.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CardComponent, NgOptimizedImage],
  templateUrl: './talks.component.html',
  standalone: true,
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent {

}
