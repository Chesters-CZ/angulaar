import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-checkedforms',
  templateUrl: './checkedforms.component.html',
  styleUrls: ['./checkedforms.component.scss']
})
export class CheckedformsComponent implements OnInit {
  username: String;
  usernames: String[];

  addUnameToUnames() {
    this.usernames[this.usernames.length] = this.username;
    this.username = null;
  }

  debugstuff

  constructor() { }

  ngOnInit(): void {
  }

}
