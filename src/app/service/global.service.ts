import { Injectable } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { SuperService } from './super.service';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

//import {  Headers, RequestOptions } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public loadingCtrl: LoadingController ,public modalCtrl: ModalController, public toastCtrl: ToastController, public superP: SuperService, public http: HttpClient) { }

  /**
   * accueil en ligne
   */
  getaccueilEnLine() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/accueil-en-ligne.php").pipe(res => res) : null ;
  }

  /**
   * accueil en ligne
   */
  getaccueilHorsLine() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/accueil-hors-ligne.php").pipe(res => res) : null ;
  }

  /**
   * login
   */
  getlogin(params: any) {
    return (this.superP.Connected) ? this.http.post(this.superP.URL + "api/login.php", params).pipe(res => res) : null;
  }

  /**
   * inscription
   */
  getInscription(params: any) {
    return (this.superP.Connected) ? this.http.post(this.superP.URL + "api/inscription.php", params).pipe(res => res) : null;
  }

   /**
   * services list demande info 
  */
 listDemandeInfoServices(id_contact) {
  return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-favoris-liste.php?id_contact="+id_contact).pipe(res => res) : null;
}

    /**
   * remove demande services
   */
  removeDemandeInfoServices(id) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/service-infos-update.php?id="+id).pipe(res => res) : null;
  }

  /** 
   * forget password
   */
  sendEmail(params: any) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/resetpass.php?email="+params).pipe(res => res) : null;
  }

  // /**
  //  * catégorie list 
  //  */
  // getListCategories() {
  //   return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/categorie_produit.php").map(res => res) : null;
  // }
 
  // /**
  //  * catégorie list  multilevels
  //  */
  getListCategoriesServices(id_categorie){
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-liste.php?id_categorie="+id_categorie).pipe(res => res) : null;
  }
  
  getListCategoriesLevel(id_categorie){
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/categorie-multilevel-1.php?id="+id_categorie).pipe(res => res) : null;
  }
  /**
   * catégorie list 
   */
  getListCategories() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/categorie_produit.php").pipe(res => res) : null;
  }

   /**
   * list produit
   */
  getListServices(id_categorie) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-categorie-multilevel.php?id_categorie="+id_categorie).pipe(res => res) : null;
  }

  /**
   * galerie
   */
  getGalerie() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/galerie.php").pipe(res => res) : null;
  }
 
  /**
   * list produit
   */
  getListProduits(id_categorie) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-liste.php?id_categorie="+id_categorie).pipe(res => res) : null;
  }
  /**
   * list produit
   */
  // getListProduits(id_categorie) {
  //   // return (this.superP.Connected) ? this.http.get(this.superP.WebSite+"liste-produit.php?id_categorie="+id_categorie).map(res => res) : null;
  // }
 
  /**
   * about us
   */
  getAboutus() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/page.php").pipe(res => res) : null;
  }
 
  /**
   * produits par categorie
   */
  getProduitsParCategorie(id) {
    console.log(this.superP.URL+"api/catalogue-liste.php?id="+id);
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-liste.php?id="+id).pipe(res => res) : null;
  }

  /**
   * produit demande info
   */
  sendDemandeInfoEboutique(id_contact, id_produit, description) {
    console.log(id_contact);
    console.log(id_produit);
    console.log(description);
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-infos.php?id_contact="+id_contact+"&id_catalogue="+id_produit+"& description="+description).pipe(res => res) : null;
  }
 
  /**
   * prestation demande info
   */
  sendDemandeInfoServices(id_contact, id_service, description, date_resa) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/service-infos.php?id_contact="+id_contact+"&id_service="+id_service+"&description="+description+"&date_resa="+date_resa).pipe(res => res) : null;
  }

  /**
   * lieux
   */
  getLieux() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/lieux.php").pipe(res => res) : null;
  }

  /**
   * liens
   */
  getLiens() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/liens.php").pipe(res => res) : null;
  }

  /**
  pipe
   */
  getEvents() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/evenement.php").pipe(res => res) : null;
  }

  /**
   * Events details
   */
  getEventsDetails(id) {
    console.log(this.superP.URL+"api/evenement-detail.php?id_evenement="+id);
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/evenement-detail.php?id_evenement="+id).pipe(res => res) : null;
  }

  /**
   * messages
   */
  getMessage(id_contact) {
    console.log('id_contact : ', id_contact);
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/messages.php?id="+id_contact).pipe(res => res) : null;
  }

  /**
   *  details messages
   */
  getDetailMessage(id) {
    console.log('id message: ', id);
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/message-detail.php?id_msg="+id).pipe(res => res) : null;
  }

  /**
   *  supprimer messages
   */
  supprimerMessage(id_contact,id_msg,statut) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/message-update.php?id="+id_contact+"&id_msg="+id_msg+"&statut="+statut).pipe(res => res) : null;
  }

  /**
   * cgv
   */
  getCgv() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/cgv.php").pipe(res => res) : null;
  }

  /**
   * lookbook
   */
  getLookBook() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/lookbook.php").pipe(res => res) : null;
  }
  
  /**
   * catalogue categorie
   */
  getCatalogueCategories() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-categorie.php").pipe(res => res) : null;
  }
  /**
   * catalogue produits
   */
  getCatalogueProduits(id_categorie) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-liste.php?id="+id_categorie).pipe(res => res) : null;
  }
  /**
   * catalogue produits detail
   */
  getCatalogueDetailProduit(id_produit) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-detail.php?id="+id_produit).pipe(res => res) : null;
  }

  /**
   * list favoris 
   */
  getListFavoris(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-favoris-liste.php?id_contact="+id_contact).pipe(res => res) : null;
  }

  /**
   * add favoris 
   */
  addFavoris(id_contact, id_produit) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/produit-favoris-add.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(res => res) : null;
  }

  add(id_contact, id_produit) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/produit-favoris-add.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(res => res) : null;
  }
  /**
   * delete favoris 
   */
  deleteFavoris(id_contact, id_produit) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/produit-favoris-delete.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(res => res) : null;
  }
  
  /**
   * check favoris 
   */
  checkFavoris(id_contact, id_produit) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/produit-favoris-check.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(res => res) : null;
  }


  /**
   * list Catalogue favoris 
   */
  getCatalogueFavoris(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-liste.php?id_contact="+id_contact).pipe(res => res) : null;
  }

  /**
   * add Catalogue favoris 
   */
  addCatalogueFavoris(id_contact, id_catalogue) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/catalogue-favoris-add.php?id_contact=' + id_contact + '&id_catalogue=' + id_catalogue).pipe(res => res) : null;
  }

  /**
   * delete Catalogue favoris 
   */
  deleteCatalogueFavoris(id_contact, id_catalogue) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/catalogue-favoris-delete.php?id_contact=' + id_contact + '&id_catalogue=' + id_catalogue).pipe(res => res) : null;
  }
  
  /**
   * check Catalogue favoris 
   */
  checkCatalogueFavoris(id_contact, id_catalogue) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/catalogue-favoris-check.php?id_contact=' + id_contact + '&id_catalogue=' + id_catalogue).pipe(res => res) : null;
  }

  /**
   *  edit image profile 
   */
  editImage(id, photo) {
    return (this.superP.Connected) ? this.http.post(this.superP.URL+'api/photo-profil-edit.php?',id,photo,).pipe(res => res) : null;
  }

  /**
   *  edit profil
   */
  editProfil(user) {
    console.log('user sevice  : ', user);
    return (this.superP.Connected) ? this.http.post(this.superP.URL+'api/contactEdit.php',user).pipe(res => res) : null;
  }


  /**
   * participer au evenement
   */
  participerEvent(id_contact,id_evenement) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/participationAdd.php?id_contact='+id_contact+'&id_evenement='+id_evenement).pipe(res => res) : null;  
  }
  /**
   * Demande Rdv
   */
  sendDemandeRdv(id_contact,description, date_resa) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/demande_rdv.php?id_contact="+id_contact+"&description="+description+"&date_resa="+date_resa).pipe(res => res) : null;
  }
  
  /**
   * no participer au evenement
   */
  noParticiperEvent(id_contact,id_evenement) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/participationDelete.php?id_contact='+id_contact+'&id_evenement='+id_evenement).pipe(res => res) : null;  
  }
  
  /**
   * check participation au evenement
   */
  checkParticipation(id_contact,id_evenement) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+'api/participationCheck.php?id_contact='+id_contact+'&id_evenement='+id_evenement).pipe(res => res) : null;  
  }
  
  /**
   * pre commandes
   */
  preCmd(id_contact,panier,formulaire){
    return (this.superP.Connected) ? this.http.post(this.superP.URL+"api/precommande.php", {'id_contact': id_contact , 'panier': panier,'ship' :formulaire}).pipe(res => res) : null;  
  }
  
  /**
   * pre commandes
   */
  checkPayment(id_pre_cmd ,id) {
    // return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/preCmd.php?id_pre_cmd="+id_pre_cmd+"&paymentId="+id).pipe(res => res) : null;  
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/test-payment.php?id_pre_cmd="+id_pre_cmd+"&paymentId="+id).pipe(res => res) : null;  
  }

  /**
   * offres produit
   */
  listOffresProduits() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-promotion.php").pipe(res => res) : null;
  }

  /**
   * offres services
   */
  listOffresServices() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/service-promotion.php").pipe(res => res) : null;
  }

  /**
   * commandes list
   */
  commandesList(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/commande-list.php?id_contact="+id_contact).pipe(res => res) : null;  
  }

   /**
   * Locals
   */
  getListParticipations(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/participation-liste.php?id_contact="+id_contact).pipe(res => res) : null;
  }


   /**
    * produit-favoris-liste
   * favoris list
   */
  getArticleFavoris(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-favoris-liste.php?id_contact="+id_contact).pipe(res => res) : null;
  }

  getProFavoris(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-favoris-liste.php?id_contact="+id_contact).pipe(res => res) : null;
  }

   /**
   * languages
   */
  getFileLanguage() {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/langue.php").pipe(res => res) : null;
  }

   /**
   * creations
   */
  getCreation() {
    // return (this.superP.Connected) ? this.http.get(this.superP.WebSite+"/creation.php").map(res => res) : null;
  }

  /**
   * send demande
   */ 
  sendDemandeInfo(id_contact, id_catalogue, description) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-infos.php?id_contact="+id_contact+"&id_catalogue="+id_catalogue+"&description="+description).pipe(res => res) : null;
  }


  /**
   * list des demandes
   */
  listDemandeInfo(id_contact) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-infos-liste.php?id_contact="+id_contact).pipe(res => res) : null;
  }
 
  /**
   * remove demande
   */
  removeDemandeInfo(id) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/catalogue-infos-update.php?id="+id).pipe(res => res) : null;
  }

  /**
   * produit detail 
   */
  produit_detail(id_produit) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/produit-detail.php?id_produit="+id_produit).pipe(res => res) : null;
  }
   
  /**
   * commandes detail
   */ 
  commandesCmdDetail(id_cmd) {
    return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/commande-detail.php?id_cmd="+id_cmd).pipe(res => res) : null;  
  }

   


  /**
   * calling toast
   */
 async presentToast(message: any = "", duration: any = 3000, position: any = "top") {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
   toast.present();
  }

  /**
   * calling modal
  */
  async presentModal(mycomponent, params:any="") {
    let Modal =await this.modalCtrl.create({
      component : mycomponent,
      componentProps : params
    });
    Modal.present();
  }

  /**
   * calling Loading
  */
  async Loading(visibility) {
    let loading = await this.loadingCtrl.create({spinner: 'dots', duration : 3000}); 
    (visibility) ? loading.present() : loading.dismiss() ;
  }
}
