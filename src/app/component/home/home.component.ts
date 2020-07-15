import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numOfPasses:number;
  alpha:number;
  stopWords:string;

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.resetAllToLastRun();
  }

  public resetAllToDefault() {
    this.numOfPasses = this.mainService.getDefaultNumPasses();
    this.alpha = this.mainService.getDefaultAlpha();
    this.stopWords = this.mainService.getDefaultStopWords();
  }

  public resetAllToLastRun() {
    this.numOfPasses = this.mainService.getLastRunNumPasses();
    this.alpha = this.mainService.getLastRunAlpha();
    this.stopWords = this.mainService.getLastRunStopWords();
  }

  public resetNumPassesToDefault() {
    this.numOfPasses = this.mainService.getDefaultNumPasses();
  }

  public resetNumPassesToLastRun() {
    this.numOfPasses = this.mainService.getLastRunNumPasses();
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

}
