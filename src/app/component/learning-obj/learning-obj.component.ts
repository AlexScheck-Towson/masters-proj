import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { MainService } from '../../services/main.service';
import { LearningObject } from '../../models/learningObject.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-learning-obj',
  templateUrl: './learning-obj.component.html',
  styleUrls: ['./learning-obj.component.css']
})
export class LearningObjComponent implements OnInit {

  @Input() passNum:number;
  @Input() topicsMap:Map<number, string>;
  _topic:Topic;
  displayedColumns: string[] = ['title', 'description', 'secondary_topic'];
  dataSource:MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  @Input()
  set topic(t:Topic) {
    this._topic = t;
    this.mainService.getLearningObjectsForPassAndTopic(this.passNum, this._topic.number).subscribe(data =>{
      this.dataSource = new MatTableDataSource(this.initDataSource(data));
      this.dataSource.sort = this.sort;
    });
  }

  private initDataSource(data:LearningObject[]):any[] {
    let myArray = [];
    for (let lo of data) {
      myArray.push({title: lo.name, description: lo.description, secondary_topic: this.topicsMap.get(lo.secondary_topic_num)});
    }
    return myArray;
  } 

}
