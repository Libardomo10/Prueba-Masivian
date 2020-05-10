import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-woodpecker',
  templateUrl: './woodpecker.component.html',
  styleUrls: ['./woodpecker.component.css']
})
export class WoodpeckerComponent implements OnInit {

  objComicW: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWoodpecker();
  }

  getWoodpecker() {
    this.objComicW = {};
    this.http.get("/614/info.0.json").subscribe(
      resp => {
        this.objComicW = resp;
        this.objComicW.news = "This comic is about the woodpecker.";
      }
    );
  }

}
