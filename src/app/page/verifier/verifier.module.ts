import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerifierPage } from './verifier.page';
import { LottieAnimationViewModule } from 'ng-lottie';

const routes: Routes = [
  {
    path: '',
    component: VerifierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule.forRoot(),
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerifierPage]
})
export class VerifierPageModule {}
