import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScoreBoardRoutingModule} from './score-board-routing.module';
import {ScoreBoardComponent} from './score-board.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ScoreBoardRoutingModule,
    ScoreBoardComponent
  ]
})
export class ScoreBoardModule {
}
