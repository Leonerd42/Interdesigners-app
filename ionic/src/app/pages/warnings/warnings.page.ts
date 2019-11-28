import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.page.html',
  styleUrls: ['./warnings.page.scss'],
})
export class WarningsPage implements OnInit {

  avisos;
  visibleWarnings: number; 
  displayAvisos = 'nlidos';
  networkConnection = true;

  constructor(private dbService: DatabaseService,
              private network: Network) {
      this.UpdateWarnings().then((res) => {
        this.avisos = res; 
        this.visibleWarnings = this.CountVisibles(); 
      });
  }

  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
    this.networkConnection = false;
  });

  connectSubscription = this.network.onConnect().subscribe(() => {
    console.log('network connected!');
    this.networkConnection = true;
  });

  CountVisibles(){
    var cont = 0; 
    this.avisos.forEach((element) => {
      if(element.visible == true){
        cont++; 
      }      
    });
    return cont; 
  }

  UpdateWarnings() {
    var aux = this.dbService; 
    return new Promise(function(resolve, reject){
        aux.GetWarnings().subscribe((res) => {
            //console.log(res); 
            var avisos = JSON.parse(JSON.stringify(res)).Items;
            resolve(avisos);
          }, (err) => {
            console.log(err)
            reject(err); 
      });
    });
    
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.UpdateWarnings().then((res) => {
        console.log(res); 
        this.avisos = res; 
        this.visibleWarnings = this.CountVisibles(); 
        event.target.complete(); 
    }).catch((err) => {
      event.target.complete(); 
      console.log('erro'); 
    });
    /*.then((res) => {
      this.avisos = res;
      event.target.complete();
    }).catch((err) => {
        console.log(`Erro no update warnings`);
        console.log(err);
    });*/
  }

  segmentChanged(event: any) {
    console.log(event);
    this.displayAvisos = event.detail.value;
  }

  MarcarComoLida(item) {
    console.log(`Aviso para marcar como lido: ${item}`);
  }

}
