import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {

  objComic: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBreakingNews();
  }

  getBreakingNews() {
    this.objComic = {};
    this.http.get("/info.0.json").subscribe(
      resp => {
        this.objComic = resp;
        this.objComic.news = "This comic is breaking news.";
      }
    );
  }
}
