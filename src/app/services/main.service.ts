import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';
import { LearningObject } from '../models/learningObject.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  private flashURL:string = 'http://127.0.0.1:5002/';
  public passes:number[] = []

  private defaultNumTopics = 13;
  private defaultAlpha = 30;
  private defaultStopWords = "module, student, james";
  private lastRunNumTopics = this.defaultNumTopics;
  private lastRunAlpha = this.defaultAlpha;
  private lastRunStopWords = this.defaultStopWords;

  private getUrl(path:string) {
    return 'http://127.0.0.1:5002/' + path;
  }

  loadPasses() {
    this.http.get<number[]>(this.getUrl('passNums')).subscribe(data =>{
      this.passes = data;
    });
  }

  getTopicsForPass(passNum:number):Observable<Topic[]> {
    return this.http.post<Topic[]>(this.getUrl('topics'), {passNum: passNum});
  }

  getLearningObjectsForPassAndTopic(passNum: number, topicNum:number):Observable<LearningObject[]> {
    return this.http.post<LearningObject[]>(this.getUrl('learning-objects'), {passNum: passNum, topicNum: topicNum});
  }

  clearAllPasses():Observable<boolean> {
    return this.http.get<boolean>(this.getUrl('clearPasses'));
  }

  executeTopicModeling(numTopics:number, alpha:number, stopWords:string[], stopWordsString:string):Observable<number> {
    this.lastRunNumTopics = numTopics;
    this.lastRunAlpha = alpha;
    this.lastRunStopWords = stopWordsString;
    return this.http.post<number>(this.getUrl('execute'), {numTopics: numTopics, alpha: alpha, stopWords: stopWords});
  }

  populatePasses(passes:number[]) {
    this.passes = passes;
  }

  addPass(pass:number) {
    this.passes.push(pass);
  }

  public getDefaultNumTopics() {
    return this.defaultNumTopics;
  }

  public getDefaultAlpha() {
    return this.defaultAlpha;
  }

  public getDefaultStopWords() {
    return this.defaultStopWords;
  }

  public getLastRunNumTopics() {
    return this.lastRunNumTopics;
  }

  public getLastRunAlpha() {
    return this.lastRunAlpha;
  }

  public getLastRunStopWords() {
    return this.lastRunStopWords;
  }
}
 