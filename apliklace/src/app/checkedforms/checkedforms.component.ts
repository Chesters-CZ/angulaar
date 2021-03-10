import {Component, Injectable, OnInit} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as http from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;}

@Component({
  selector: 'app-checkedforms',
  templateUrl: './checkedforms.component.html',
  styleUrls: ['./checkedforms.component.scss']
})

export class CheckedformsComponent implements OnInit {

  username: String;
  usernames: String[] = [];

  // me hasn't the brains. místo věku zadává telefon, ale to nevadí. budeme dělat že je to věk.
  telphon: String;
  telphons: String[] = [];

  addUnameToUnames() {
    console.debug("addunametounames started");
    console.debug(this.username);
    this.usernames[this.usernames.length] = this.username;
    this.http.put("https://webhook.site/026c64bb-f24b-4986-aee9-ac8d211d2156", this.username);

    if (this.telphon.length < 9){ //pro čísla co začínaj nulou / nulama
      while (this.telphon.length != 9){
        this.telphon = "0" + this.telphon;
      }
    }

    this.telphons[this.telphons.length] = this.telphon.charAt(0) + this.telphon.charAt(1) + this.telphon.charAt(2) + " " + this.telphon.charAt(3) + this.telphon.charAt(4) + this.telphon.charAt(5) + " " + this.telphon.charAt(6) + this.telphon.charAt(7) + this.telphon.charAt(8);
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

}

