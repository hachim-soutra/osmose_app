import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultiLevel1Page } from './multi-level1.page';

const routes: Routes = [
  {
    path: '',
    component: MultiLevel1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultiLevel1Page]
})
export class MultiLevel1PageModule {}
