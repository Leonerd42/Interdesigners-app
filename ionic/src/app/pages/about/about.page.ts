import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  parceirosA = [

    {
       src: '/assets/img/logos/Newpen.png', 
       url: 'https://www.newpen.com.br',
       col:1
    },
    {
      src: '/assets/img/logos/PU.png', 
      url: 'https://www.papelariauniversitaria.com.br',
      col:1

    }
    ];

  parceiros = [

    {
      src: '/assets/img/logos/Pixel Show.png', 
      url: 'https://zupi.pixelshow.co',
      col: 2
    },
    {
      src: '/assets/img/logos/Nois.png', 
      url: 'https://www.noisestampa.com.br',
      col:2
    },
    {
      src: '/assets/img/logos/Qualiart.png', 
      url: 'https://facebook.com/qualiart.camisetas/',//ok
      col:2
    },
    {
      src: '/assets/img/logos/Lynk3D.png', 
      url: 'http://lynk3d.com.br',
      col:2
    },
    {
      src: '/assets/img/logos/Zupi.png', 
      url: 'https://zupi.pixelshow.co',
      col:2
    },
    {
      src: '/assets/img/logos/Zupi Academy.png', 
      url: 'https://zupi.pixelshow.co',
      col:2
    }
  ];
  apoios = [
    {
      src: '/assets/img/logos/Depto Design.png', 
      url: ''
    }, 
    {
      src: '/assets/img/logos/FAAC.png', 
      url: ''
    }, 
    {
      src: '/assets/img/logos/UNESP.png', 
      url: ''
    } 
  ];

  realizadores = [
    {
      src: '/assets/img/logos/COIDE.png', 
      url: ''
    } 
  ];

  desenvolvedores = [
    {
      src: 'assets/img/logos/LTIA.png', 
      url: ''
    } 
  ];

  public botao:boolean = false;

  public items: any[] = [
    {
      title: 'karalho',
      src: 'assets/img/logos/LTIA.png',
    },
    {
      title: 'karalho',
      src: 'assets/img/logos/COIDE.png',
    },{
      title: 'karalho',
      src: 'assets/img/logos/FAAC.png',
    },{
      title: 'karalho',
      src: 'assets/img/logos/UNESP.png',
    },

];


  constructor() { }

  ngOnInit() {
  }

  noclick(){
    this.botao=!this.botao;
  }



}


