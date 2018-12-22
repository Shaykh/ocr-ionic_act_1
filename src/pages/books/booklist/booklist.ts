import { Book } from './../../../app/models/Book';
import { DonneesService } from './../../../services/donneesService';
import { Component } from "@angular/core";
import { MenuController, ModalController } from "ionic-angular";
import { LendBookPage } from '../lendbook/lendbook';

@Component({
    selector: 'tab-booklist',
    templateUrl: 'booklist.html'
})
export class BookListPage {
    
    books: Book[];

    constructor(private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private donneesService: DonneesService) {
    }

    ionViewWillEnter() {
        this.books = this.donneesService.bookList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onShowBook(index: number) {
        let modal = this.modalCtrl.create(LendBookPage, { index: index});
        modal.present();
    }
}