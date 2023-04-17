import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  constructor(private fb: FormBuilder){}

  formContato = this.fb.group({
    nome: ["",[
      Validators.minLength(4),
      Validators.required
    ]],
    assunto:["",[
      Validators.minLength(4),
      Validators.required
    ]],
    telefone: ["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.minLength(44),
    ]],
    mensagem: ["",[
      Validators.minLength(55),
      Validators.required
    ]]
  })
}
