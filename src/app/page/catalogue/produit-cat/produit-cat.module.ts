import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProduitCatPage } from './produit-cat.page';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';

const routes: Routes = [
  {
    path: '',
    component: ProduitCatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProduitCatPage ,ProduitServiceComponent],
  entryComponents: [ProduitServiceComponent]
})
export class ProduitCatPageModule {}
