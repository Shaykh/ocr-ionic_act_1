import { Book } from './../../../app/models/Book';
import { BookService } from './../../../services/BookService';
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
        private bookService: BookService) {
    }

    ionViewWillEnter(){
        this.books = this.bookService.bookList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onShowBook(index: number) {
        let modal = this.modalCtrl.create(LendBookPage, { index: index});
        modal.present();
    }
}