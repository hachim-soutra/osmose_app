import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DemandeinfoPage } from './demandeinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DemandeinfoPage]
})
export class DemandeinfoPageModule {}
