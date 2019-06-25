import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavPage } from './fav.page';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { FavArtComponent } from 'src/app/component/fav-art/fav-art.component';

const routes: Routes = [
  {
    path: '',
    component: FavPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavPage,FavArtComponent],
  entryComponents: [FavArtComponent]
})
export class FavPageModule {}
