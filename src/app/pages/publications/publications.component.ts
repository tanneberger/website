import {Component} from '@angular/core';
import {CardComponent} from "../../core/card/card.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CardComponent, NgOptimizedImage],
  templateUrl: './publications.component.html',
  standalone: true,
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

}
