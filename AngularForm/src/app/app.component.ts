import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'formInterD';

  //url = 'http://127.0.0.1:3000/';
  url = 'http://ec2-18-220-88-156.us-east-2.compute.amazonaws.com:3000/';

  Selected = 1; 
  typeEvent: string; 
  titleMsg: string; 
  EventAffected: string; 
  message: string;
  importancyLevel: string; 
  password: string; 

  warningSucess = false; 
  warningFailure = false;
  warningPasswordWrong = false; 
  deletedSucess = false;
  loading = false; 

  arrayWarnings;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.GetWarnings(); 
  }

  TrocarSelected(id){
    this.Selected = id;
  }

  SendMessage(){
    console.log(this.typeEvent, this.titleMsg, this.EventAffected, this.message, this.importancyLevel);
    if(this.titleMsg != undefined && this.message != undefined && this.password != undefined){
      this.warningFailure = false;

      var obj = {
        tipo: this.typeEvent ? this.typeEvent : ' ', 
        titulo: this.titleMsg, 
        event: this.EventAffected ? this.EventAffected :' ', 
        mensagem: this.message, 
        importancia: this.importancyLevel ? this.importancyLevel :' ', 
        senha: this.password
      };

      // Envia ao back end 
      this.loading = true; 
      this.http.post(`${this.url}warnings`, obj).subscribe((res:any) => {
          if(res.status === 'senha-incorreta'){
            this.loading = false; 
            this.warningPasswordWrong = true; 
            setTimeout(() => {
              this.warningPasswordWrong = false;
            }, 5000);
          } else {
            this.GetWarnings(); 

            this.loading = false; 
            this.warningSucess = true;
            // Com a resposta recebida mostra o aviso e depois de um tempo retira ele 
            setTimeout(() => {
              this.warningSucess = false; 
              this.ClearFields(); 
            }, 4000);
          }
    });
    }else {
      this.warningFailure = true; 
    }
  }

  ClearFields(){
    this.typeEvent = undefined; 
    this.titleMsg = undefined; 
    this.EventAffected = undefined 
    this.message = undefined 
    this.importancyLevel  = undefined; 
    this.password = undefined;
  }

  GetWarnings() {
    // Executa a busca 
    this.http.get(`${this.url}warnings`).subscribe((res: any) => {
      this.arrayWarnings = res.Items; 
      console.log(this.arrayWarnings);
    });
  }

  Delete(item){
    if(confirm(`Deseja mesmo deletar ${item}?`)){
      var data = {
        senha: this.password, 
        warningID: item
      };
      this.http.post(`${this.url}deleteWarning`, data).subscribe((res: any) => {
        if(res.status === 'delete-senha-incorreta'){
          this.warningPasswordWrong = true; 
          setTimeout(() => {
              this.warningPasswordWrong = false;
          }, 5000);
        } else {
          this.deletedSucess = true; 
          setTimeout(() => {
            this.deletedSucess = false; 
          }, 5000);
          this.GetWarnings();
        } 
      });
    }
  }


}
