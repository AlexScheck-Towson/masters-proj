import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  private flashURL:string = 'http://127.0.0.1:5002/';
  private passes:number[] = [1,2,3]

  populatePasses(passes:number[]) {
    this.passes = passes;
  }

  addPass(pass:number) {
    this.passes.push(pass);
  }
}
 