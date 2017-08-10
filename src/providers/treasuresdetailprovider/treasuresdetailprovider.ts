import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TreasuresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TreasuresDetailProvider {

    data: any;

    constructor(public http: Http) {
        console.log('Hello TreasuresDetailProvider Provider');
        this.data = null;
    }

    gettreasuresdetail() {



        return new Promise(resolve => {
            

            this.http.get('/api/Detail')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                    console.log(data);
                });
            
        });
    }
}
