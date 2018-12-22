import { DonneesService } from './../../../services/donneesService';
import { Book } from './../../../app/models/Book';
import { Component, OnInit } from "@angular/core";
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-lendbook',
    templateUrl: 'lendbook.html'
})
export class LendBookPage implements OnInit {

    index: number;
    book: Book;

    constructor(public navParams: NavParams,
        private viewCtrl: ViewController,
        private donneesService: DonneesService) {
    }

    ngOnInit(): void {
        this.index = this.navParams.get('index');
        this.book = this.donneesService.bookList[this.index];
    }

    onDismissModal() {
        this.viewCtrl.dismiss();
    }

    onToggleLend() {
        this.book.isLent = !this.book.isLent;
    }
}
