import {Injectable} from '@angular/core';
import events from './../data/events.json';
import {EventoModel} from '../models/evento.model';
import {HttpClient} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';

import {Storage} from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})

export class DatabaseService {

    // Essa classe é a classe de acesso ao banco de dados do aplicativo
    // Qualquer tipo de acesso ou mudança em um dado é necessário passar por essa classe
    diretorioJson = './../data/data.json';
    Days = [7, 8, 9, 10, 11];
    DaysofWeek = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'];

    // Variavel que lê os dados do arquivo data.json
    SamplesEvents: EventoModel[] = [];

    url = 'http://ec2-18-220-88-156.us-east-2.compute.amazonaws.com:3000/';

    warnings;

    constructor(private http: HttpClient,
                private storage: Storage,
                private ionHttp: HTTP) {
        this.ionHttp.setDataSerializer('json');
        const data = JSON.parse(JSON.stringify(events)).data;
        data.forEach(
            dado => {
                this.SamplesEvents.push(new EventoModel(
                    dado.ID,
                    dado.event,
                    dado.name,
                    dado.description,
                    dado.type,
                    dado.local,
                    dado.day,
                    dado.hour_i,
                    dado.hour_f,
                    dado.responsable,
                    dado.favorite
                ));
            }
        );
        this.SamplesEvents.sort((a, b) => {
            return a.Hora_inicial - b.Hora_inicial;
        });

        this.storage.ready()
            .then(() => {
                this.storage.get('favoritosSalvos')
                    .then((res) => {
                        try {
                            this.UpdateFavoriteData(res);
                            console.log('Deu certo o update dos favoritos');
                        } catch (er) {
                            console.log('erro no try catch');
                        }
                    });
            }).catch(() => {
            console.log('erro');
        });
    }

    GetWarnings() {
        return this.http.get(`${this.url}warnings`);
    }


    filtraEventos(day: number) {
        return this.SamplesEvents.filter(x => x.Dia === day);
    }

    filtraFavoritos(day: number) {
        return this.SamplesEvents.filter(x => x.Dia === day && x.Favorito);
    }

    GetDates() {
        return this.Days;
    }

    GetDaysofWeek() {
        return this.DaysofWeek;
    }

    ToggleFavoriteEvent(id) {
        this.SamplesEvents.filter(x => x.Id === id).map((x) => {
                if (!x.Favorito) {
                    this.AddFavoriteToStorage(id);
                } else {
                    // Remove do vetor de favoritos
                    this.RemoveFavoriteOfStorage(id);
                }
                x.Favorito = !x.Favorito;
            }
        );
    }

    AddFavoriteToStorage(id) {
        this.storage.get('favoritosSalvos').then((dado) => {
            if (dado == null) {
                const array = [];
                array.push(id);
                this.storage.set('favoritosSalvos', array).then((res) => {
                    console.log('dado salvo com sucesso!!!');
                }).catch((err) => {
                    console.log('erro ao salvar o dado');
                });
            } else {
                const arrayRecebido = dado;
                arrayRecebido.push(id);
                this.storage.set('favoritosSalvos', arrayRecebido).then((res) => {
                    console.log('Novo dado salvo!!!');
                }).catch((err) => {
                    console.log('Problema ao salvar o dado');
                });
            }
        });
    }

    RemoveFavoriteOfStorage(id) {
        this.storage.get('favoritosSalvos').then((dado) => {
            var newarray = dado.filter((value) => {
                return value != id;
            });
            this.storage.set('favoritosSalvos', newarray)
                .then((res) => {
                    console.log(`Dado ${id} removido com sucesso!!`);
                })
                .catch((err) => {
                    console.log(`Dado ${id} não foi removido!!`);
                });
        });
    }

    UpdateFavoriteData(array) {
        array.forEach((item) => {
            this.SamplesEvents.forEach((item2, index, array) => {
                if (item2.Id == item) {
                    item2.Favorito = true;
                }
            });
        });
    }

    //-----------------------------------------------GOOGLE MAPS API------------------------------------//

    //OBJETO

    markers: any[] = [
        {
            lat: -22.344316,
            lng: -49.029370,
            label: 'LTIA',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },


        },
        {
            lat: -22.348455,
            lng: -49.031258,
            label: 'Salas 50s',
            draggable: false,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.348644,
            lng: -49.032058,
            label: 'Laboratórios Desing',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.347065,
            lng: -49.029001,
            label: 'CADEP',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.349516,
            lng: -49.031401,
            label: 'Oficina de Madeira (LDMP)',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.346350,
            lng: -49.030497,
            label: 'Guilhermão',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.350197,
            lng: -49.032118,
            label: 'Sala 1',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.347745,
            lng: -49.030752,
            label: 'Central de Salas(Anfiteatro Adriana Chaves)',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
        {
            lat: -22.349807,
            lng: -49.031918,
            label: 'Bosque',
            draggable: true,
            icon: {
                url: 'assets/icon/icontest.png',
                scaledSize: {
                    height: 40,
                    width: 40
                },
                labelOrigin: {
                    x: 12,
                    y: 12
                }
            },
        },
    ];

}




