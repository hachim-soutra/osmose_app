import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailPage } from './service-detail.page';
import { DemandeinfoComponent } from 'src/app/component/demandeinfo/demandeinfo.component';
import { LoginComponent } from 'src/app/component/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceDetailPage,DemandeinfoComponent,LoginComponent],
  entryComponents: [DemandeinfoComponent,LoginComponent]
})
export class ServiceDetailPageModule {}
