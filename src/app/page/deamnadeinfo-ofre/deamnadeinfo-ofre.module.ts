import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeamnadeinfoOfrePage } from './deamnadeinfo-ofre.page';

const routes: Routes = [
  {
    path: '',
    component: DeamnadeinfoOfrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeamnadeinfoOfrePage]
})
export class DeamnadeinfoOfrePageModule {}
