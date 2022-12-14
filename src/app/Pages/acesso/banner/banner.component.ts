import { trigger, state, style } from '@angular/animations';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0 
      })),
      state( 'visivel', style({
        opacity: 1 
      }))
    ])
  ]
})
export class BannerComponent implements OnInit {

public estado: string = 'visivel'

  constructor() { }

  ngOnInit(): void {
  }

}
