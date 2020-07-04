import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Topic } from './models/topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scheck-app-ui';

  public passNum:number = 1;


  constructor(private http: HttpClient) {
    
  }

  buttonPressed() {
    this.http.post<Topic[]>('http://127.0.0.1:5002/topics',{passNum: this.passNum}).subscribe(data => {
      console.log(data);
    });
    // alert(this.name);
  }
}


