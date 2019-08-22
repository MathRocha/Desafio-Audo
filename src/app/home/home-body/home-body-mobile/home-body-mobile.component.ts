import { Component } from '@angular/core';
import { HomeBody } from '../home-body';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home-body-mobile',
  templateUrl: './home-body-mobile.component.html',
  styleUrls: ['./home-body-mobile.component.scss'],
  animations: [
    trigger('expandableState', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('150ms', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('150ms', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class HomeBodyMobileComponent extends HomeBody {}
