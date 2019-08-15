import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros.component';
import { HeroService } from './heros.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})

export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHerosData().subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes);
      this.heroes.forEach(hero => {
        if (hero.type == "jpeg") {

        } else if (hero.type == "png") {

        }
      });

    });
  }
  loadSource(hero) {
    debugger
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

function saveTextAsFile(data, filename) {

  if (!data) {
    console.error('Console.save: No data')
    return;
  }

  if (!filename) filename = 'console.json'

  var blob = new Blob([atob(data)], { type: 'application/pdf' }),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')
  // FOR IE:

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  }
  else {
    var e = document.createEvent('MouseEvents'),
      a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['application/pdf', a.download, a.href].join(':');
    e.initEvent('click', true, false, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  }
}


function expFile() {
  var fileText = path;
  var fileName = "newfile001.pdf"
  saveTextAsFile(fileText, fileName);
}


// this._sanitizer.bypassSecurityTrustUrl();
// https://www.base64decode.org/
// https://base64.guru/converter/
// https://codepen.io/sandeep821/pen/JKaYZq?editors=1010