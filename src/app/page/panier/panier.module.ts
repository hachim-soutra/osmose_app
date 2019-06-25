import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanierPage } from './panier.page';
import { PayemnetComponent } from 'src/app/component/payemnet/payemnet.component';

const routes: Routes = [
  {
    path: '',
    component: PanierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanierPage],
})
export class PanierPageModule {}
