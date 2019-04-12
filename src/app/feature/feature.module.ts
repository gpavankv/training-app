import { FeatureRoutingModule } from './feature-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifthComponent } from './fifth/fifth.component';
import { DataShareService } from '../services/data-share.service';
import { SixthComponent } from './sixth/sixth.component';

@NgModule({
  declarations: [
    FifthComponent,
    SixthComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  providers: [
    DataShareService,
  ]
})
export class FeatureModule { }
