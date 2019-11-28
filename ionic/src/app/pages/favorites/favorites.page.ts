import {Component, OnInit} from '@angular/core';
import {DatabaseService} from 'src/app/services/database.service';
import {EventoModel} from '../../models/evento.model';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

    events: EventoModel[] = [];
    day = 7;

    constructor(private dataService: DatabaseService) {
    }

    ngOnInit() {
        this.listaEventos(this.day);
    }

    listaEventos(dia: number) {
        this.events = this.dataService.filtraFavoritos(dia);
        this.day = dia;
        console.log(this.events);
    }

    ToggleFavoriteSchedulePage(event) {
        this.dataService.ToggleFavoriteEvent(event);
        this.listaEventos(this.day);
    }

}
