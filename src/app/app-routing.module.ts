import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './page/home/home.module#HomePageModule' },
  { path: 'loginT', loadChildren: './page/auth/login/login.module#LoginPageModule' },

  { path: 'panier', loadChildren: './page/panier/panier.module#PanierPageModule' },
  { path: 'checkout', loadChildren: './page/panier/checkout/checkout.module#CheckoutPageModule' },
  { path: 'DetailmessagePage/:id', loadChildren: './page/propos/propos.module#ProposPageModule' },
  { path: 'tabs', loadChildren: './page/tabs/tabs.module#TabsPageModule' },

  { path: 'categories-page', loadChildren: './page/boutique/categories-page/categories-page.module#CategoriesPagePageModule' },
  { path: 'produit-detail/:id', loadChildren: './page/boutique/categories-page/sous-cat/sous-cat.module#SousCatPageModule' },
  { path: 'categories-page/:id', loadChildren: './page/boutique/produit-detail/produit-detail.module#ProduitDetailPageModule' },
  { path: 'categories-page/:idc/rebrique/:id', loadChildren: './page/boutique/multi-level/multi-level.module#MultiLevelPageModule' },
  { path: 'categories-page/:idc/rebrique/:idr/sous-cat/:id', loadChildren: './page/boutique/multi-level/cat/cat.module#CatPageModule' },

  { path: 'cmd-detail/:id', loadChildren: './page/boutique/cmd-detail/cmd-detail.module#CmdDetailPageModule' },
  { path: 'cmd', loadChildren: './page/boutique/cmd/cmd.module#CmdPageModule' },

  { path: 'catalogue', loadChildren: './page/catalogue/catalogue.module#CataloguePageModule' },
  { path: 'catalogue/:id', loadChildren: './page/catalogue/produit-cat/produit-cat.module#ProduitCatPageModule' },
  { path: 'catalogue/:id/:idp', loadChildren: './page/catalogue/produit-cat/produit/produit.module#ProduitPageModule' },
  { path: 'article/:id', loadChildren: './page/boutique/article/article.module#ArticlePageModule' },

  { path: 'lieu', loadChildren: './page/info/lieu/lieu.module#LieuPageModule' },
  { path: 'cgv', loadChildren: './page/info/cgv/cgv.module#CgvPageModule' },
  { path: 'detailavantapres/:id', loadChildren: './page/info/cgv/detail/detail.module#DetailPageModule' },

  
  { path: 'about', loadChildren: './page/info/about/about.module#AboutPageModule' },
  { path: 'map/:id', loadChildren: './page/info/map/map.module#MapPageModule' },

  { path: 'evenement', loadChildren: './page/evenement/evenement.module#EvenementPageModule' },
  { path: 'evenement-detail/:id', loadChildren: './page/evenement/evenement-detail/evenement-detail.module#EvenementDetailPageModule' },

  { path: 'msg', loadChildren: './page/msg/msg.module#MsgPageModule' },
  { path: 'galerie', loadChildren: './page/galerie/galerie.module#GaleriePageModule' },
  { path: 'favorite', loadChildren: './page/favorite/favorite.module#FavoritePageModule' },
  { path: 'rdv', loadChildren: './page/rdv/rdv.module#RdvPageModule' },

  { path: 'offre', loadChildren: './page/offre/offre.module#OffrePageModule' },
  { path: 'offre-produit-detail/:id', loadChildren: './page/offre/services-pro/services-pro.module#ServicesProPageModule' },
  { path: 'offre-service-detail/:id', loadChildren: './page/offre/produit-detail/produit-detail.module#ProduitDetailPageModule' },

  { path: 'demandeinfo/cataloge/:id', loadChildren: './page/demandeinfo/demandeinfo.module#DemandeinfoPageModule' },
  { path: 'demandeinfo/prestation/:id', loadChildren: './page/deamnadeinfo-pre/deamnadeinfo-pre.module#DeamnadeinfoPrePageModule' },
  { path: 'demandeinfo/offre/:id', loadChildren: './page/deamnadeinfo-ofre/deamnadeinfo-ofre.module#DeamnadeinfoOfrePageModule' },

  { path: 'register', loadChildren: './page/auth/register/register.module#RegisterPageModule' },
  { path: 'fav', loadChildren: './page/auth/fav/fav.module#FavPageModule' },

  { path: 'signin', loadChildren: './page/auth/signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './page/auth/signup/signup.module#SignupPageModule' },
  { path: 'forget', loadChildren: './page/auth/forget/forget.module#ForgetPageModule' },
  { path: 'edit-profil', loadChildren: './page/auth/profile/edit-profil/edit-profil.module#EditProfilPageModule' },
  { path: 'compte', loadChildren: './page/auth/compte/compte.module#ComptePageModule' },
  { path: 'evenement-detail', loadChildren: './page/evenement/evenement-detail/evenement-detail.module#EvenementDetailPageModule' },
  { path: 'verifier/:id', loadChildren: './page/verifier/verifier.module#VerifierPageModule' },

  { path: 'mes-produit-service', loadChildren: './page/auth/profile/list-demande-services/list-demande-services.module#ListDemandeServicesPageModule' },
  { path: 'mes-participent', loadChildren: './page/auth/profile/mes-participent/mes-participent.module#MesParticipentPageModule' },
  { path: 'mes-article-fav', loadChildren: './page/auth/profile/article-fav/article-fav.module#ArticleFavPageModule' },
  { path: 'mes-demandes', loadChildren: './page/auth/profile/list-demande/list-demande.module#ListDemandePageModule' },
  { path: 'mes-demandes-boutique', loadChildren: './page/auth/profile/profile.module#ProfilePageModule' },
  { path: 'mes-demande-service', loadChildren: './page/lieu/lieu.module#LieuPageModule' },

  // { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'detailvisite', loadChildren: './page/detailvisite/detailvisite.module#DetailvisitePageModule' },
  
  { path: 'services', loadChildren: './page/service/service.module#ServicePageModule' },
  { path: 'produit-service/:id', loadChildren: './page/service/produit-service/produit-service.module#ProduitServicePageModule' },
  { path: 'service-detail/:idc/:id', loadChildren: './page/service/service-detail/service-detail.module#ServiceDetailPageModule' },




  // { path: 'blog', loadChildren: './page/info/blog/blog.module#BlogPageModule' },
  // { path: 'temiognage', loadChildren: './page/info/temiognage/temiognage.module#TemiognagePageModule' },
  // { path: 'tarif', loadChildren: './page/info/tarif/tarif.module#TarifPageModule' },
  // { path: 'shop', loadChildren: './page/info/shop/shop.module#ShopPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
