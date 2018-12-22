import { LendCdPage } from './../lendcd/lendcd';
import { DonneesService } from './../../../services/donneesService';
import { ModalController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Cd } from './../../../app/models/Cd';
import { Component } from "@angular/core";

@Component({
    selector: 'tab-cdlist',
    templateUrl: 'cdlist.html'
})
export class CdListPage {
    cds: Cd[];

    constructor(private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private donneesService: DonneesService) {}

    ionViewWillEnter() {
        this.cds = this.donneesService.CdList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onShowCd(index: number) {
        let modal = this.modalCtrl.create(LendCdPage, { index: index});
        modal.present();
    }
}
