import { Route, Router } from '@angular/router';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho, produtos } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(public CarrinhoService: CarrinhoService,
              private router: Router){}

  ngOnInit(): void {

    this.itensCarrinho = this.CarrinhoService.obtemCarrinho();
    this.calculaTotal();

  }

  removeProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
    this.CarrinhoService.removerProdutoCarrinho(produtoId)
    this.calculaTotal()
  }

  calculaTotal(){
   this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade),0)
  }

  comprar(){
     alert("parabéns você finalizou a sua compra")
     this.CarrinhoService.limparCarrinho()
     this.router.navigate(['/produtos']);
  }


}
