import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MesParticipentPage } from './mes-participent.page';

const routes: Routes = [
  {
    path: '',
    component: MesParticipentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MesParticipentPage]
})
export class MesParticipentPageModule {}
