import { FifthComponent } from './fifth/fifth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SixthComponent } from './sixth/sixth.component';

const routes: Routes = [
  { path: 'fifth', component: FifthComponent },
  { path: 'sixth', component: SixthComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class FeatureRoutingModule { }
