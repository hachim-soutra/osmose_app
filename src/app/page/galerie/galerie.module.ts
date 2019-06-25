import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaleriePage } from './galerie.page';
import { ZoomComponent } from 'src/app/component/zoom/zoom.component';

const routes: Routes = [
  {
    path: '',
    component: GaleriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GaleriePage,ZoomComponent],
  entryComponents: [ZoomComponent]
})
export class GaleriePageModule {}
