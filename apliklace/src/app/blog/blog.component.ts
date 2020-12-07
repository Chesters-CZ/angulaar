import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  headerinput;
  bodyinput;
  constructor() { }

  ngOnInit(): void {

  }

  postBlog(header, body){
    let outputPlace = document.getElementById("BlogPostY");
    let obal = document.createElement("div");
    let headrelem = document.createElement("h3");
    headrelem.innerText = header;
    obal.appendChild(headrelem);
    let bodyelem = document.createElement("p");
    bodyelem.innerText = body;
    obal.appendChild(bodyelem);
    outputPlace.appendChild(obal);
  }
}
