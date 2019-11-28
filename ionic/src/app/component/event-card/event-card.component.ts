import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {EventoModel, TipoEvento} from '../../models/evento.model';

@Component({
    selector: 'event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {

    @Input() evento: EventoModel;
    @Output() Favorite = new EventEmitter();
    eventos = TipoEvento;
    constructor(public alertController: AlertController) {
    }

    ngOnInit() {
    }

    OpenDescription(id) {
        console.log('abrindo o alert!');
        this.presentAlertMultipleButtons();
    }

    ToggleFavorite(id) {
        this.Favorite.emit(id);
    }

    async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
            header: this.evento.Name,
            subHeader: this.evento.Tipo,
            message: `${this.evento.Descricao}\nLocal: ${this.evento.Local}`,
            buttons: ['Voltar'],
            cssClass: 'myAvisos'
        });
        await alert.present();
    }
}
