import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicationsRoutingModule} from './publications-routing.module';
import {PublicationsComponent} from './publications.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    PublicationsComponent
  ]
})
export class PublicationsModule {
}
