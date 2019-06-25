import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OffrePage } from './offre.page';
import { ProduitServiceComponent } from 'src/app/component/produit-service/produit-service.component';
import { OffrePComponent } from 'src/app/component/offre-p/offre-p.component';

const routes: Routes = [
  {
    path: '',
    component: OffrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OffrePage,OffrePComponent],
  entryComponents: [OffrePComponent]
})
export class OffrePageModule {}
