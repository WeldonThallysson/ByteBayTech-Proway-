import { IProdutoCarrinho } from './../../produtos';
import { IProduto,produtos } from 'src/app/produtos';

import { ProdutosService } from '../../produtos.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route} from '@angular/router'
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})

export class DetalhesProdutoComponent implements OnInit {
      produto: IProduto | undefined ;
      quantidade = 1;

  constructor(
      private produtosService: ProdutosService,
      private route: ActivatedRoute,
      private notificacao: NotificacaoService,
      private adicionar: CarrinhoService
  ){}


  // logo abaixo a const route params está pegando tudo que ta vindo pelo url do site e colocando o valor dentro dela, o produtoId ta usando o metodo get para pegar o id lá em cima e converter de string para number, e atribuir a ela , e por fim vamos chamar o produtosService e usar o metodo que criei .getOne e dentro dele colocar o id que ta vindo lá em cima que é para ele filtrar lá no produtos service, e caso ele veja que o id ali da url é o mesmo id que o do objeto em produtos.ts então ele vai atribuir o objeto a this.produto, e assim eu posso pegar aqui dentro desse componente e usar o {{produtos.nome }} ou um pegar a imagem la do objeto aqui que vai dar certo como [src]="produto?.imagem",tranquilamente.

    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get("id"));
      this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
        this.notificacao.notificar("o produto foi adicionado no carrinho")
        const produto: IProdutoCarrinho = {
           ...this.produto!,
           quantidade: this.quantidade
        }
        this.adicionar.adicionarAoCarrinho(produto)
  }
}
