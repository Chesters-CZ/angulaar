import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-litesout',
  templateUrl: './litesout.component.html',
  styleUrls: ['./litesout.component.scss']
})
export class LitesoutComponent implements OnInit {

  constructor() {
    this.regenerate();
  }

  public endscreenshown: boolean;
  public mcdonaldsplayspace: boolean[][];
  public size: number;
  public clicks: number;

  ngOnInit(): void {
  }

  regenerate() {
    this.clicks = 0;
    this.endscreenshown = false;
    console.debug(this.size);
    this.size = parseInt(window.prompt("how many difficults do you want?", "10"));
    while (isNaN(this.size)){
      this.size = parseInt(window.prompt("HEY! I ASKED YOU A QUESTION!", "10"));
    }
    console.debug(this.size);
    this.mcdonaldsplayspace = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.mcdonaldsplayspace[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        this.mcdonaldsplayspace[i][j] = Math.random() < 0.5;
      }
    }
    console.debug(this.mcdonaldsplayspace);
  }

  getclickedon(x: number, y: number) {
    console.debug(this.size);
    console.debug("x/y = " + x + "/" + y);
    this.clicks++;
    try {
      this.mcdonaldsplayspace[x][y] = !this.mcdonaldsplayspace[x][y];
    } catch (e) {
      console.debug("cell oob");
    }
    try {
      if (x + 1 < this.size) this.mcdonaldsplayspace[x + 1][y] = !this.mcdonaldsplayspace[x + 1][y];
    } catch (e) {
      console.debug("cell x+1 oob");
    }
    try {
      if (y + 1 < this.size) this.mcdonaldsplayspace[x][y + 1] = !this.mcdonaldsplayspace[x][y + 1];
    } catch (e) {
      console.debug("cell y+1 oob");
    }
    try {
      this.mcdonaldsplayspace[x - 1][y] = !this.mcdonaldsplayspace[x - 1][y];
    } catch (e) {
      console.debug("cell x-1 oob");
    }
    try {
      this.mcdonaldsplayspace[x][y - 1] = !this.mcdonaldsplayspace[x][y - 1];
    } catch (e) {
      console.debug("cell y-1 oob");
    }

    this.didiwin(); //troubleshootění. plus to vypadá cool jakože to chvíli verifikuje výsledky
  }

  didiwin() {
    console.debug(this.size);
    let confirmedfail: boolean = false;
    for (let i = 0; i < this.size; i++) { //když použiju enhanced for tak hlásí že this.playspace is not iterable. vypadá to složitě, takže to botchnu
      if (confirmedfail) break;
      for (let j = 0; j < this.size; j++) {
        console.log("mcd playspace i" + i + " j" + j + " " + this.mcdonaldsplayspace[i][j])
        if (this.mcdonaldsplayspace[i][j]) {
          confirmedfail = true;
          break;
        }
      }
    }
    console.debug("verified value = " + confirmedfail);
    if (!confirmedfail) this.endscreenshown = true;
    console.debug("verified value = " + confirmedfail);
    console.debug("endshown " + this.endscreenshown);
  }
}


/* gárbidg kód
    for (let i = 0; i < size; i++) {
      this.mcdonaldsplayspace[i] = [];
      for (let j = 0; j < size; j++) {
        this.mcdonaldsplayspace[i][j] = Math.random() < 0.5;
      }
    }


 */
