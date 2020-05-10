import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-comic',
  templateUrl: './rating-comic.component.html',
  styleUrls: ['./rating-comic.component.css']
})
export class RatingComicComponent implements OnInit {
  
  score = 0;
  scored = false;

  constructor() { }

  ngOnInit(): void {}

  onScore(e) {
    this.scored = true;
    this.score = e;
  }

  scoreReset() {
    this.scored = false;
    this.score = 0;
  }

}
