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

  addUnameToUnames() {
    console.debug("addunametounames started");
    console.debug(this.username);
    this.usernames[this.usernames.length+1] = this.username;
    this.http.put("https://webhook.site/c69b9ba0-5ca3-44c9-9ba1-737071941d61", this.username);
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

}

