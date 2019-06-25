import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SousCatPage } from './sous-cat.page';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { ProduitComponent } from 'src/app/component/produit/produit.component';
import { DemandeinfoComponent } from 'src/app/component/demandeinfo/demandeinfo.component';

const routes: Routes = [
  {
    path: '',
    component: SousCatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SousCatPage,ProduitComponent,DemandeinfoComponent],
  entryComponents: [ProduitComponent,DemandeinfoComponent]
})
export class SousCatPageModule {}
