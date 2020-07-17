import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from './../../models/topic.model';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  passNum:number;
  topics:Topic[];

  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.passNum = routeParams.passNum;
      this.mainService.getTopicsForPass(this.passNum).subscribe(data => {
        this.topics = data;
        console.log(data);
      });
    });
  }

}
