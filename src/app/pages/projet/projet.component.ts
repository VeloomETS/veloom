import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    const rellaxHeader = new Rellax('.rellax-header');

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('projet');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
}
