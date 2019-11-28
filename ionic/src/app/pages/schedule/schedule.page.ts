import {Component, ViewChild, OnInit, Input, Output} from '@angular/core';
import {MbscFormOptions} from '@mobiscroll/angular';
import {DatabaseService} from 'src/app/services/database.service';
import {EventoModel} from '../../models/evento.model';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

    events: EventoModel[] = [];
    day = 7;

    constructor(private dataService: DatabaseService) {
    }

    ngOnInit() {
        this.listaEventos(this.day);
    }

    listaEventos(dia: number) {
        this.events = this.dataService.filtraEventos(dia);
        this.day = dia;
    }

    ToggleFavoriteSchedulePage(event) {
        this.dataService.ToggleFavoriteEvent(event);
    }
}
