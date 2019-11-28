export enum TipoEvento {
    institucional = 1,
    Oficina = 2,
    'roda de conversa' = 3,
    expressão = 4,
    bazar = 5,
    palestra = 6,
    festa = 7
}

export class EventoModel {
    Id: number;
    EventNumber: number;
    Name: string;
    Tipo: string;
    Descricao: string;
    Local: string;
    Dia: number;
    Hora_inicial: number;
    Minuto_inicial: number;
    Hora_final: number;
    Minuto_final: number;
    Responsavel: string;
    Favorito: boolean;

    constructor(id: number, event: number, name: string, descricao: string, tipoEvento: string,
                local: string, dia: number, hora_i: string, hora_f: string, responsavel: string, favorito: boolean) {

        const hr = hora_i.split(':');
        const hr_i = parseInt(hr[0]);
        const min_i = parseInt(hr[1]);
        const hr2 = hora_f.split(':');
        const hr_f = parseInt(hr2[0]);
        const min_f = parseInt(hr2[1]);
        this.Id = id;
        this.EventNumber = event;
        this.Name = name;
        this.Tipo = tipoEvento;
        this.Descricao = descricao;
        this.Local = local;
        this.Dia = dia;
        this.Hora_inicial = hr_i;
        this.Minuto_inicial = min_i;
        this.Hora_final = hr_f;
        this.Minuto_final = min_f;
        this.Responsavel = responsavel;
        this.Favorito = favorito;
    }
}
