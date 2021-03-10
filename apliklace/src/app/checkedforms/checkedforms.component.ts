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

    let sampltext: String = this.telphon;
    if (sampltext.length < 9){ //pro čísla co začínaj nulou / nulama
      while (sampltext.length != 9){
        sampltext = "0" + sampltext;
      }
    }

    this.telphons[this.telphons.length] = sampltext; //.charAt(0).toString() + sampltext.charAt(1).toString() + sampltext.charAt(2).toString() + " " + sampltext.charAt(3).toString() + sampltext.charAt(4).toString() + sampltext.charAt(5).toString() + " " + sampltext.charAt(6).toString() + sampltext.charAt(7).toString() + sampltext.charAt(8).toString();
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

}

