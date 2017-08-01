import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreasuresDetailProvider } from '../../providers/treasuresdetailprovider/treasuresdetailprovider';
import { Http, HttpModule } from '@angular/http';
 
/**
 * Generated class for the TreasuresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-treasure-detail',
    templateUrl: 'treasure-detail.html',
})
export class TreasureDetailPage {




    details: any;
    links = [];
    ProjID: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public treasuresDetailService: TreasuresDetailProvider) {
        this.ProjID = navParams.data;
        
       
    }
    

    ionViewDidLoad() {
        console.log('ionViewDidLoad TreasuresDetailPage');
        this.treasuresDetailService.gettreasuresdetail().then((data) => {
            this.details = data;
            for (let i = 0; i < this.details.length; i++) {
                this.links[i] = "https://s3.amazonaws.com/katcher/PID" + this.details[i].PID + "/Photo/1.jpg";
                this.ProjID=this.ProjID;
            }
        });
    }

}