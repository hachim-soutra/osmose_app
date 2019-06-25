import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutPage } from './checkout.page';
import { PayemnetComponent } from 'src/app/component/payemnet/payemnet.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckoutPage,PayemnetComponent],
  entryComponents: [PayemnetComponent]
  
})
export class CheckoutPageModule {}
