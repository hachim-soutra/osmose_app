import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MsgPage } from './msg.page';
import { MsgComponent } from 'src/app/component/msg/msg.component';

const routes: Routes = [
  {
    path: '',
    component: MsgPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MsgPage,MsgComponent],
  entryComponents: [MsgComponent]
})
export class MsgPageModule {}
