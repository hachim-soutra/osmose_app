import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticleFavPage } from './article-fav.page';
import { FavArtComponent } from 'src/app/component/fav-art/fav-art.component';
import { ArtFavComponent } from 'src/app/component/art-fav/art-fav.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleFavPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticleFavPage,ArtFavComponent],
  entryComponents: [ArtFavComponent]
})
export class ArticleFavPageModule {}
