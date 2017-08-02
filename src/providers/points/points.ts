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
    date: Date;
}

@Injectable()
export class PointsProvider {
	points: Array<Points>;

  constructor(public http: Http) {
    console.log('Hello PointsProvider Provider');
  }

  getpoints(id){
    return new Promise(resolve => {
      this.http.get('/api/points/id/'+ id)
        .map(res => res.json())
        .subscribe(data => {
          this.points = data;
          resolve(this.points);
        });
    });
  }

  updatepoints(activity: string, n: number){
    //get points for today
    //add activity points for that
  }

}