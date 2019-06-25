import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { SuperService } from './super.service';
import { HttpClient } from '@angular/common/http';
//import {  Headers, RequestOptions } from '@angular/http';
var GlobalService = /** @class */ (function () {
    function GlobalService(loadingCtrl, modalCtrl, toastCtrl, superP, http) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.superP = superP;
        this.http = http;
    }
    /**
     * accueil en ligne
     */
    GlobalService.prototype.getaccueilEnLine = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/accueil-en-ligne.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * accueil en ligne
     */
    GlobalService.prototype.getaccueilHorsLine = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/accueil-hors-ligne.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * login
     */
    GlobalService.prototype.getlogin = function (params) {
        return (this.superP.Connected) ? this.http.post(this.superP.URL + "api/login.php", params).pipe(function (res) { return res; }) : null;
    };
    /**
     * inscription
     */
    GlobalService.prototype.getInscription = function (params) {
        return (this.superP.Connected) ? this.http.post(this.superP.URL + "api/inscription.php", params).pipe(function (res) { return res; }) : null;
    };
    /**
    * services list demande info
   */
    GlobalService.prototype.listDemandeInfoServices = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-favoris-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
   * remove demande services
   */
    GlobalService.prototype.removeDemandeInfoServices = function (id) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/service-infos-update.php?id=" + id).pipe(function (res) { return res; }) : null;
    };
    /**
     * forget password
     */
    GlobalService.prototype.sendEmail = function (params) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/resetpass.php?email=" + params).pipe(function (res) { return res; }) : null;
    };
    // /**
    //  * catégorie list 
    //  */
    // getListCategories() {
    //   return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/categorie_produit.php").map(res => res) : null;
    // }
    // /**
    //  * catégorie list  multilevels
    //  */
    GlobalService.prototype.getListCategoriesServices = function (id_categorie) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-liste.php?id_categorie=" + id_categorie).pipe(function (res) { return res; }) : null;
    };
    GlobalService.prototype.getListCategoriesLevel = function (id_categorie) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/categorie-multilevel-1.php?id=" + id_categorie).pipe(function (res) { return res; }) : null;
    };
    /**
     * catégorie list
     */
    GlobalService.prototype.getListCategories = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/categorie_produit.php").pipe(function (res) { return res; }) : null;
    };
    /**
    * list produit
    */
    GlobalService.prototype.getListServices = function (id_categorie) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-categorie-multilevel.php?id_categorie=" + id_categorie).pipe(function (res) { return res; }) : null;
    };
    /**
     * galerie
     */
    GlobalService.prototype.getGalerie = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/galerie.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * list produit
     */
    GlobalService.prototype.getListProduits = function (id_categorie) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-liste.php?id_categorie=" + id_categorie).pipe(function (res) { return res; }) : null;
    };
    /**
     * list produit
     */
    // getListProduits(id_categorie) {
    //   // return (this.superP.Connected) ? this.http.get(this.superP.WebSite+"liste-produit.php?id_categorie="+id_categorie).map(res => res) : null;
    // }
    /**
     * about us
     */
    GlobalService.prototype.getAboutus = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/page.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * produits par categorie
     */
    GlobalService.prototype.getProduitsParCategorie = function (id) {
        console.log(this.superP.URL + "api/catalogue-liste.php?id=" + id);
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-liste.php?id=" + id).pipe(function (res) { return res; }) : null;
    };
    /**
     * produit demande info
     */
    GlobalService.prototype.sendDemandeInfoEboutique = function (id_contact, id_produit, description) {
        console.log(id_contact);
        console.log(id_produit);
        console.log(description);
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-infos.php?id_contact=" + id_contact + "&id_catalogue=" + id_produit + "& description=" + description).pipe(function (res) { return res; }) : null;
    };
    /**
     * prestation demande info
     */
    GlobalService.prototype.sendDemandeInfoServices = function (id_contact, id_service, description, date_resa) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/service-infos.php?id_contact=" + id_contact + "&id_service=" + id_service + "&description=" + description + "&date_resa=" + date_resa).pipe(function (res) { return res; }) : null;
    };
    /**
     * lieux
     */
    GlobalService.prototype.getLieux = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/lieux.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * liens
     */
    GlobalService.prototype.getLiens = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/liens.php").pipe(function (res) { return res; }) : null;
    };
    /**
    pipe
     */
    GlobalService.prototype.getEvents = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/evenement.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * Events details
     */
    GlobalService.prototype.getEventsDetails = function (id) {
        console.log(this.superP.URL + "api/evenement-detail.php?id_evenement=" + id);
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/evenement-detail.php?id_evenement=" + id).pipe(function (res) { return res; }) : null;
    };
    /**
     * messages
     */
    GlobalService.prototype.getMessage = function (id_contact) {
        console.log('id_contact : ', id_contact);
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/messages.php?id=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
     *  details messages
     */
    GlobalService.prototype.getDetailMessage = function (id) {
        console.log('id message: ', id);
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/message-detail.php?id_msg=" + id).pipe(function (res) { return res; }) : null;
    };
    /**
     *  supprimer messages
     */
    GlobalService.prototype.supprimerMessage = function (id_contact, id_msg, statut) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/message-update.php?id=" + id_contact + "&id_msg=" + id_msg + "&statut=" + statut).pipe(function (res) { return res; }) : null;
    };
    /**
     * cgv
     */
    GlobalService.prototype.getCgv = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/cgv.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * lookbook
     */
    GlobalService.prototype.getLookBook = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/lookbook.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * catalogue categorie
     */
    GlobalService.prototype.getCatalogueCategories = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-categorie.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * catalogue produits
     */
    GlobalService.prototype.getCatalogueProduits = function (id_categorie) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-liste.php?id=" + id_categorie).pipe(function (res) { return res; }) : null;
    };
    /**
     * catalogue produits detail
     */
    GlobalService.prototype.getCatalogueDetailProduit = function (id_produit) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-detail.php?id=" + id_produit).pipe(function (res) { return res; }) : null;
    };
    /**
     * list favoris
     */
    GlobalService.prototype.getListFavoris = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-favoris-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
     * add favoris
     */
    GlobalService.prototype.addFavoris = function (id_contact, id_produit) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/produit-favoris-add.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(function (res) { return res; }) : null;
    };
    GlobalService.prototype.add = function (id_contact, id_produit) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/produit-favoris-add.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(function (res) { return res; }) : null;
    };
    /**
     * delete favoris
     */
    GlobalService.prototype.deleteFavoris = function (id_contact, id_produit) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/produit-favoris-delete.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(function (res) { return res; }) : null;
    };
    /**
     * check favoris
     */
    GlobalService.prototype.checkFavoris = function (id_contact, id_produit) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/produit-favoris-check.php?id_contact=' + id_contact + '&id_produit=' + id_produit).pipe(function (res) { return res; }) : null;
    };
    /**
     * list Catalogue favoris
     */
    GlobalService.prototype.getCatalogueFavoris = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
     * add Catalogue favoris
     */
    GlobalService.prototype.addCatalogueFavoris = function (id_contact, id_catalogue) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/catalogue-favoris-add.php?id_contact=' + id_contact + '&id_catalogue=' + id_catalogue).pipe(function (res) { return res; }) : null;
    };
    /**
     * delete Catalogue favoris
     */
    GlobalService.prototype.deleteCatalogueFavoris = function (id_contact, id_catalogue) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/catalogue-favoris-delete.php?id_contact=' + id_contact + '&id_catalogue=' + id_catalogue).pipe(function (res) { return res; }) : null;
    };
    /**
     * check Catalogue favoris
     */
    GlobalService.prototype.checkCatalogueFavoris = function (id_contact, id_catalogue) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/catalogue-favoris-check.php?id_contact=' + id_contact + '&id_catalogue=' + id_catalogue).pipe(function (res) { return res; }) : null;
    };
    /**
     *  edit image profile
     */
    GlobalService.prototype.editImage = function (id, photo) {
        return (this.superP.Connected) ? this.http.post(this.superP.URL + 'api/photo-profil-edit.php?', id, photo).pipe(function (res) { return res; }) : null;
    };
    /**
     *  edit profil
     */
    GlobalService.prototype.editProfil = function (user) {
        console.log('user sevice  : ', user);
        return (this.superP.Connected) ? this.http.post(this.superP.URL + 'api/contactEdit.php', user).pipe(function (res) { return res; }) : null;
    };
    /**
     * participer au evenement
     */
    GlobalService.prototype.participerEvent = function (id_contact, id_evenement) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/participationAdd.php?id_contact=' + id_contact + '&id_evenement=' + id_evenement).pipe(function (res) { return res; }) : null;
    };
    /**
     * Demande Rdv
     */
    GlobalService.prototype.sendDemandeRdv = function (id_contact, description, date_resa) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/demande_rdv.php?id_contact=" + id_contact + "&description=" + description + "&date_resa=" + date_resa).pipe(function (res) { return res; }) : null;
    };
    /**
     * no participer au evenement
     */
    GlobalService.prototype.noParticiperEvent = function (id_contact, id_evenement) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/participationDelete.php?id_contact=' + id_contact + '&id_evenement=' + id_evenement).pipe(function (res) { return res; }) : null;
    };
    /**
     * check participation au evenement
     */
    GlobalService.prototype.checkParticipation = function (id_contact, id_evenement) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + 'api/participationCheck.php?id_contact=' + id_contact + '&id_evenement=' + id_evenement).pipe(function (res) { return res; }) : null;
    };
    /**
     * pre commandes
     */
    GlobalService.prototype.preCmd = function (id_contact, panier, formulaire) {
        return (this.superP.Connected) ? this.http.post(this.superP.URL + "api/precommande.php", { 'id_contact': id_contact, 'panier': panier, 'ship': formulaire }).pipe(function (res) { return res; }) : null;
    };
    /**
     * pre commandes
     */
    GlobalService.prototype.checkPayment = function (id_pre_cmd, id) {
        // return (this.superP.Connected) ? this.http.get(this.superP.URL+"api/preCmd.php?id_pre_cmd="+id_pre_cmd+"&paymentId="+id).pipe(res => res) : null;  
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/test-payment.php?id_pre_cmd=" + id_pre_cmd + "&paymentId=" + id).pipe(function (res) { return res; }) : null;
    };
    /**
     * offres produit
     */
    GlobalService.prototype.listOffresProduits = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-promotion.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * offres services
     */
    GlobalService.prototype.listOffresServices = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/service-promotion.php").pipe(function (res) { return res; }) : null;
    };
    /**
     * commandes list
     */
    GlobalService.prototype.commandesList = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/commande-list.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
    * Locals
    */
    GlobalService.prototype.getListParticipations = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/participation-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
     * produit-favoris-liste
    * favoris list
    */
    GlobalService.prototype.getArticleFavoris = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-favoris-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    GlobalService.prototype.getProFavoris = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-favoris-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
    * languages
    */
    GlobalService.prototype.getFileLanguage = function () {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/langue.php").pipe(function (res) { return res; }) : null;
    };
    /**
    * creations
    */
    GlobalService.prototype.getCreation = function () {
        // return (this.superP.Connected) ? this.http.get(this.superP.WebSite+"/creation.php").map(res => res) : null;
    };
    /**
     * send demande
     */
    GlobalService.prototype.sendDemandeInfo = function (id_contact, id_catalogue, description) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-infos.php?id_contact=" + id_contact + "&id_catalogue=" + id_catalogue + "&description=" + description).pipe(function (res) { return res; }) : null;
    };
    /**
     * list des demandes
     */
    GlobalService.prototype.listDemandeInfo = function (id_contact) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-infos-liste.php?id_contact=" + id_contact).pipe(function (res) { return res; }) : null;
    };
    /**
     * remove demande
     */
    GlobalService.prototype.removeDemandeInfo = function (id) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/catalogue-infos-update.php?id=" + id).pipe(function (res) { return res; }) : null;
    };
    /**
     * produit detail
     */
    GlobalService.prototype.produit_detail = function (id_produit) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/produit-detail.php?id_produit=" + id_produit).pipe(function (res) { return res; }) : null;
    };
    /**
     * commandes detail
     */
    GlobalService.prototype.commandesCmdDetail = function (id_cmd) {
        return (this.superP.Connected) ? this.http.get(this.superP.URL + "api/commande-detail.php?id_cmd=" + id_cmd).pipe(function (res) { return res; }) : null;
    };
    /**
     * calling toast
     */
    GlobalService.prototype.presentToast = function (message, duration, position) {
        if (message === void 0) { message = ""; }
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = "top"; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: duration,
                            position: position
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * calling modal
    */
    GlobalService.prototype.presentModal = function (mycomponent, params) {
        if (params === void 0) { params = ""; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var Modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: mycomponent,
                            componentProps: params
                        })];
                    case 1:
                        Modal = _a.sent();
                        Modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * calling Loading
    */
    GlobalService.prototype.Loading = function (visibility) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({ spinner: 'dots', duration: 3000 })];
                    case 1:
                        loading = _a.sent();
                        (visibility) ? loading.present() : loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    GlobalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController, ModalController, ToastController, SuperService, HttpClient])
    ], GlobalService);
    return GlobalService;
}());
export { GlobalService };
//# sourceMappingURL=global.service.js.map