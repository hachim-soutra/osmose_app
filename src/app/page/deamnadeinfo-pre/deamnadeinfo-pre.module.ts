import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeamnadeinfoPrePage } from './deamnadeinfo-pre.page';

const routes: Routes = [
  {
    path: '',
    component: DeamnadeinfoPrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeamnadeinfoPrePage]
})
export class DeamnadeinfoPrePageModule {}
