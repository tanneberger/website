import {Component} from '@angular/core';
import {CardComponent} from "../../core/card/card.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CardComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
