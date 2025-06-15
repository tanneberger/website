import {Component} from '@angular/core';
import {CardComponent} from "../../core/card/card.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CardComponent, NgOptimizedImage],
  templateUrl: './score-board.component.html',
  standalone: true,
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent {

}
