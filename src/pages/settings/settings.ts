import { MenuController } from 'ionic-angular';
import { Component } from "@angular/core";

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})

export class SettingsPage {

    constructor(private menuCtrl: MenuController) {}

    onToggleMenu() {
        this.menuCtrl.open();
    }
}