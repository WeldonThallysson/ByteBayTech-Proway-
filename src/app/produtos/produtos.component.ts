import { ProdutosService } from './../produtos.service';
import { IProduto,produtos } from './../produtos';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
    constructor(private produtosService: ProdutosService ){}
     produtos: IProduto[] = produtos;

      ngOnInit(): void {
        this.produtos = this.produtosService.getAll();
      }
}
