import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LieuPage } from './lieu.page';
import { MapComponent } from 'src/app/component/map/map.component';
import { LottieAnimationViewModule } from 'ng-lottie';

const routes: Routes = [
  {
    path: '',
    component: LieuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [LieuPage, MapComponent],
  entryComponents: [MapComponent]
})
export class LieuPageModule {}
