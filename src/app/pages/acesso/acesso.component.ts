import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [
    trigger('animacao-banner', [
      state('criado',style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(0px, -50px)' }),
        animate('350ms 0s ease-in-out')
      ])
    ]),

    trigger('animacao-login', [
      state('criado',style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(0px, 0px)' }),
        animate('500ms 0.2s ease-in-out')
      ])
    ]),
  ]
})
export class AcessoComponent implements OnInit {
 stateBanner: string = 'criado'
 stateLogin: string = 'criado'
  constructor() { }

  ngOnInit(): void {
  }

}
