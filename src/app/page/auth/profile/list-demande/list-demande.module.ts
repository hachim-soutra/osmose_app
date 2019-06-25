import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListDemandePage } from './list-demande.page';
import { DemmandesListComponent } from 'src/app/component/demmandes-list/demmandes-list.component';

const routes: Routes = [
  {
    path: '',
    component: ListDemandePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListDemandePage,DemmandesListComponent],
  entryComponents: [DemmandesListComponent]
})
export class ListDemandePageModule {}
