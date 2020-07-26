import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { MainService } from '../../services/main.service';
import { LearningObject } from '../../models/learningObject.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-learning-obj',
  templateUrl: './learning-obj.component.html',
  styleUrls: ['./learning-obj.component.css']
})
export class LearningObjComponent implements OnInit {

  @Input() passNum:number;
  @Input() topicsMap:Map<number, string>;
  _topic:Topic;
  learningObjs:LearningObject[];
  displayedColumns: string[] = ['title', 'description', 'secondary_topic'];
  //dataSource:MatTableDataSource<any>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  @Input()
  set topic(t:Topic) {
    this._topic = t;
    this.mainService.getLearningObjectsForPassAndTopic(this.passNum, this._topic.number).subscribe(data =>{
      this.learningObjs = data;
      // this.dataSource = [];
      // for (let lo of this.learningObjs) {
      //   this.dataSource.push({})
      // }
    });
  }


}
