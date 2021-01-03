import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  postBlog(header, body, numbr) {
    //console.log("postblog num is " + numbr)
    if (numbr < 0 || numbr == null) {
      let outputPlace = document.getElementById("BlogPostY");
      let obal = document.createElement("div");
      let headrelem = document.createElement("h3");
      headrelem.innerText = header;
      obal.appendChild(headrelem);
      let bodyelem = document.createElement("p");
      bodyelem.innerText = body;
      obal.appendChild(bodyelem);
      outputPlace.appendChild(obal);
    } else {
      if (header == "" && body == "") {
        document.getElementById("BlogPostY").removeChild(numbr);
      } else {
        let outputPlace = document.getElementById("BlogPostY").childNodes[numbr];
        outputPlace.childNodes[0].textContent = header;
        outputPlace.childNodes[1].textContent = body;
      }
    }

  }
}
