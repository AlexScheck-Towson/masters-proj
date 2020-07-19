import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numTopics:number;
  alpha:number;
  stopWords:string;

  constructor(public mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.resetAllToLastRun();
  }

  public resetAllToDefault() {
    this.numTopics = this.mainService.getDefaultNumTopics();
    this.alpha = this.mainService.getDefaultAlpha();
    this.stopWords = this.mainService.getDefaultStopWords();
  }

  public resetAllToLastRun() {
    this.numTopics = this.mainService.getLastRunNumTopics();
    this.alpha = this.mainService.getLastRunAlpha();
    this.stopWords = this.mainService.getLastRunStopWords();
  }

  public resetNumTopicsToDefault() {
    this.numTopics = this.mainService.getDefaultNumTopics();
  }

  public resetNumTopicsToLastRun() {
    this.numTopics = this.mainService.getLastRunNumTopics();
  }

  public resetAlphaToDefault() {
    this.alpha = this.mainService.getDefaultAlpha();
  }

  public resetAlphaToLastRun() {
    this.alpha = this.mainService.getLastRunAlpha();
  }

  public resetStopWordsToDefault() {
    this.stopWords = this.mainService.getDefaultStopWords();
  }

  public resetStopWordsToLastRun() {
    this.stopWords = this.mainService.getLastRunStopWords();
  }

  execute():void {
    let rawList = this.stopWords.split(',');
    let swList = [];
    let issueWords = '';
    for (let w of rawList) {
      let s = w.trim();
      if(s.length === 0) {
        continue;
      }
      if (/\s/g.test(s)) {
        if (issueWords.length === 0) {
          issueWords = s;
        } else {
          issueWords = issueWords + ', ' + s;
        }
      } else {
        swList.push(s);
      }
    }
    if (issueWords.length > 0) {
      alert("Stop words cannot have spaces: " + issueWords);
    } else {
      this.mainService.executeTopicModeling(this.numTopics, this.alpha, swList, this.stopWords).subscribe(data => {
        this.mainService.addPass(data);
        this.router.navigate(['/pass/' + data])
      });
    }
  }

}
