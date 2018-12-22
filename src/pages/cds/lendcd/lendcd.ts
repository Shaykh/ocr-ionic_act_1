import { DonneesService } from './../../../services/donneesService';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from './../../../app/models/Cd';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'page-lendcd',
    templateUrl: 'lendcd.html'
})
export class LendCdPage implements OnInit {
    index: number;
    cd: Cd;

    constructor(public navParams: NavParams,
        private viewCtrl: ViewController,
        private donneesService: DonneesService) {}
    
    ngOnInit() {
        this.index = this.navParams.get('index');
        this.cd = this.donneesService.CdList[this.index];
    }

    onDismissModal() {
        this.viewCtrl.dismiss();
    }

    onToggleLend() {
        this.cd.isLent = !this.cd.isLent;
    }
}