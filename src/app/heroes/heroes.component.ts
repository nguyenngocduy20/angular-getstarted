import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 0,
    name: 'Xuan Trai',
    skill: 'Microsoft Office 365',
    description: 'There is no description'
  };

  constructor() { }

  ngOnInit() {
  }

}
