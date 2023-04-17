import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {


  constructor(private router:Router){}
  descricao = "";
  pesquisar(){
    if(this.descricao){
       this.router.navigate(["produtos"],{queryParams:{descricao: this.descricao}})
       return;
    }
    this.router.navigate(["produtos"])
}
}
