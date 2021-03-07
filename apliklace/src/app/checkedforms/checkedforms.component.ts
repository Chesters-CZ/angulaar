import {Component, Injectable, OnInit} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as  http from 'http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) { }}

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
    http.put("https://webhook.site/c69b9ba0-5ca3-44c9-9ba1-737071941d61", this.username)
    this.username = null;
  }

  debugstuff

  constructor() { }

  ngOnInit(): void {
  }

}

