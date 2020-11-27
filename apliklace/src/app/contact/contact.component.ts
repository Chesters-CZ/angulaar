import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  hodnotaText;
  hodnotaNumber;
  hodnotaPass;

  constructor() { }

  ngOnInit(): void {
  }

  vypisvjec() {
    console.log(this.hodnotaText);
    console.log(this.hodnotaNumber);
    console.log(this.hodnotaPass);
  }
}
