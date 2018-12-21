import { LendCdPage } from './../lendcd/lendcd';
import { CdService } from './../../../services/CdService';
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
        private cdService: CdService) {}

    ionViewWillEnter() {
        this.cds = this.cdService.CdList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onShowCd(index: number) {
        let modal = this.modalCtrl.create(LendCdPage, { index: index});
        modal.present();
    }
}
