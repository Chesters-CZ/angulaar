import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excrept',
  templateUrl: './excrept.component.html',
  styleUrls: ['./excrept.component.scss']
})
export class ExcreptComponent implements OnInit {

  constructor() { }

  zkratit(teckst, length){
    let outplace = document.getElementById("otput");
    let chary: [] = teckst.split("");
    let vysledek = "";
    for (let i = 0; i< length; i++){
      vysledek = vysledek + chary[i];
    }
    vysledek = vysledek + "...";
    let obal = document.createElement("div");
    obal.textContent = vysledek;
    outplace.appendChild(obal);
  }

  ngOnInit(): void {
  }

}
