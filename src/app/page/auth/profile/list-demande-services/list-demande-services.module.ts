import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListDemandeServicesPage } from './list-demande-services.page';
import { ProFavComponent } from 'src/app/component/pro-fav/pro-fav.component';

const routes: Routes = [
  {
    path: '',
    component: ListDemandeServicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListDemandeServicesPage,ProFavComponent],
  entryComponents: [ProFavComponent]
})
export class ListDemandeServicesPageModule {}
