import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PointsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class Points{
    Userid: string;
    a_comment: number;
    a_fix: number;
    a_request: number;
    p_comment: number;
    p_fix: number;
    p_request: number;
    date: Date;
}

@Injectable()
export class PointsProvider {
	points= Array{}<>;

  constructor(public http: Http) {
    console.log('Hello PointsProvider Provider');
    
  }

  updatepoints(){

  }

}
