import { CdService } from './../../../services/CdService';
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
        private cdService: CdService) {}
    
    ngOnInit() {
        this.index = this.navParams.get('index');
        this.cd = this.cdService.CdList[this.index];
    }

    onDismissModal() {
        this.viewCtrl.dismiss();
    }

    onToggleLend() {
        this.cd.isLent = !this.cd.isLent;
    }
}