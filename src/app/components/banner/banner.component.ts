import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  state: string = 'escondido';
  imagens: Imagem[] = [
    {state: 'visivel', url: '../../../assets/banner-acesso/img_01.png'},
    {state: 'escondido', url: '../../../assets/banner-acesso/img_02.png'},
    {state: 'escondido', url: '../../../assets/banner-acesso/img_03.png'},
    {state: 'escondido', url: '../../../assets/banner-acesso/img_04.png'},
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.transitionState(),6000)
  }

  transitionState(){

    let idx!: number;

    for(let i: number = 0; i <= 3; i++){
      if(this.imagens[i].state === 'visivel' ){
        this.imagens[i].state = 'escondido'

        idx = i === 3 ? 0 : i + 1

        break
      }
    }

    this.imagens[idx].state = 'visivel'
    setTimeout(() => this.transitionState(),6000)
  }

}
