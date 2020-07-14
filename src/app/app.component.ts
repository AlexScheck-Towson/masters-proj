import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Topic } from './models/topic.model';
import { LearningObject } from './models/learningObject.model';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scheck-app-ui';

  // public passNum:number = 1;
  // public topicNum:number = 4;
  public james:number[] = [1, 2, 3];


  constructor(private http: HttpClient, public mainService: MainService) {
    
  }

  // getTopicsButtonPressed() {
  //   this.http.post<Topic[]>('http://127.0.0.1:5002/topics',{passNum: this.passNum}).subscribe(data => {
  //     console.log(data);
  //   });
  //   // alert(this.name);
  // }

  // getLearningObjectsButtonPressed() {
  //   this.http.post<LearningObject[]>('http://127.0.0.1:5002/learning-objects',{passNum: this.passNum, topicNum: this.topicNum}).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}


