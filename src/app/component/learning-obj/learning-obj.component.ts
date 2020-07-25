import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { MainService } from '../../services/main.service';
import { LearningObject } from '../../models/learningObject.model';

@Component({
  selector: 'app-learning-obj',
  templateUrl: './learning-obj.component.html',
  styleUrls: ['./learning-obj.component.css']
})
export class LearningObjComponent implements OnInit {

  @Input() passNum:number;
  _topic:Topic;
  learnObjs:LearningObject[];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  @Input()
  set topic(t:Topic) {
    this._topic = t;
    this.mainService.getLearningObjectsForPassAndTopic(this.passNum, this._topic.number).subscribe(data =>{
      this.learnObjs = data;
    });
  }


}
