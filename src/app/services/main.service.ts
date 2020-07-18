import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  private flashURL:string = 'http://127.0.0.1:5002/';
  public passes:number[] = []

  private defaultNumPasses = 13;
  private defaultAlpha = 30;
  private defaultStopWords = "module, student, james";
  private lastRunNumPasses = this.defaultNumPasses;
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

  clearAllPasses():Observable<boolean> {
    return this.http.get<boolean>(this.getUrl('clearPasses'));
  }

  populatePasses(passes:number[]) {
    this.passes = passes;
  }

  addPass(pass:number) {
    this.passes.push(pass);
  }

  public getDefaultNumPasses() {
    return this.defaultNumPasses;
  }

  public getDefaultAlpha() {
    return this.defaultAlpha;
  }

  public getDefaultStopWords() {
    return this.defaultStopWords;
  }

  public getLastRunNumPasses() {
    return this.lastRunNumPasses;
  }

  public setLastRunNumPasses(lastRunNumPasses:number) {
    this.lastRunNumPasses = lastRunNumPasses;
  }

  public getLastRunAlpha() {
    return this.lastRunAlpha;
  }

  public setLastRunAlpha(lastRunAlpha:number) {
    this.lastRunAlpha = lastRunAlpha;
  }

  public getLastRunStopWords() {
    return this.lastRunStopWords;
  }

  public setLastRunStopWords(lastRunStopWords:string) {
    this.lastRunStopWords = lastRunStopWords;
  }
}
 