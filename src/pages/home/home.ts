import { Component,ViewChild } from '@angular/core';
import { NavController,ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { Chart } from 'chart.js';
import { PointsProvider } from '../../providers/points/points';
import { PointsPage } from '../points/points'
import { EarnpointsPage } from '../earnpoints/earnpoints'
import { SearchPage } from '../search/search'
import { ChatPage } from '../chat/chat'
import { TreasuresPage } from '../treasures/treasures'
import { OnesearchresultPage } from '../onesearchresult/onesearchresult'
import { TreasuresProvider } from '../../providers/treasuresprovider/treasuresprovider'
import { NewProjectPage } from '../new-project/new-project'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('legend') legend;

  lineChart: any;
  username: string;
  email:string;
  user: User;
  all_points: any;
  p_comment = [];
  p_fixes = [];
  p_request = [];
  p_total = [];
  searched = false;
  labels = [];
  timeframe = "week";

  
  constructor(private nav: NavController, private auth: AuthService, private p: PointsProvider, public modalCtrl: ModalController,
              public action:ActionSheetController, public alert:AlertController, public tres: TreasuresProvider) {
    let info = this.auth.getUserInfo();
    this.username = info.fname;
    this.email = info.email;
    this.user = info;
    if(this.user.last_viewed != ''){
      this.searched = true;
    }
  }

  ionViewDidEnter(){
    let info = this.auth.getUserInfo();
  }

  chartcreate(){
       var colors = {
      green: {
        fill: '#09355C',
        stroke: '#09355C',
      },
      darkBlue: {
        fill: '#CBCBCB',
        stroke: '#CBCBCB',
      },
      purple: {
        fill: '#B61B12',
        stroke: '#B61B12',
      },
    };

    // var ctx = this.lineCanvas.getContext("2D");
    // ctx.canvas.

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: "New Fixes",
          fill: false,
          backgroundColor: colors.purple.fill,
          pointBackgroundColor: colors.purple.stroke,
          borderColor: colors.purple.stroke,
          pointHighlightStroke: colors.purple.stroke,
          borderCapStyle: 'butt',
          data: this.p_fixes,
        }, {
          label: "Comments",
          fill: false,
          backgroundColor: colors.darkBlue.fill,
          pointBackgroundColor: colors.darkBlue.stroke,
          borderColor: colors.darkBlue.stroke,
          pointHighlightStroke: colors.darkBlue.stroke,
          borderCapStyle: 'butt',
          data: this.p_comment,
        }, {
          label: "Answering Requests",
          fill: false,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.green.stroke,
          borderColor: colors.green.stroke,
          pointHighlightStroke: colors.green.stroke,
          data: this.p_request,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            stacked: true,
          }]
        },
        legend:true,
        legendCallback: function(chart) {
          var text = [];
          text.push('<ul class="' + chart.id + '-legend">');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
            if (chart.data.labels[i]) {
              text.push(chart.data.labels[i]);
            }
            text.push('</span></li>');
          }
          text.push('</ul>');
          return text.join("");
        },
        // animation: {
        //   duration: 750,
        // },
      }
    });

  }

  ionViewDidLoad(){

    this.p.getpoints(this.user._id).then((data) => {
      if(data){
        this.all_points = data;
        for (var i = 0; i < this.all_points.length ; i++) {
          let comments = this.all_points[i].a_comment;
          let fix = this.all_points[i].a_fix;
          let req = this.all_points[i].a_request;
          let d = this.all_points[i].date;
          console.log(d)
          this.p_comment.push(comments *5 + this.p_comment.reduce((pv, cv) => pv+cv, 0));
          this.p_fixes.push(fix *10 + this.p_fixes.reduce((pv, cv) => pv+cv, 0));
          this.p_request.push(req *2 + this.p_request.reduce((pv, cv) => pv+cv, 0));
          this.labels.push(d)
          // this.p_total.push(comments *5 + fix *10 + req *2)
        }
        this.chartcreate()
        console.log(this.p_comment)
        console.log(this.p_fixes)
        console.log(this.p_request)
        console.log(this.labels)
      } 
    });

    console.log("hello from homepage")

 
    // this.legend.html = this.lineChart.generateLegend();
  }

  addtreasures(){
    let modal = this.modalCtrl.create(NewProjectPage);
        modal.onDidDismiss(data => {
        })
        modal.present();
        console.log("here12");
  }

  givehelp(){
    this.nav.setRoot(ChatPage)
  }

  searchfeedback(){
    this.tres.getonetreasure(this.user.last_viewed).then(project =>{
      console.log(project[0])
      this.nav.push(OnesearchresultPage, project[0])
    })
    
  }

  public pointsmodal(){
    let actionSheet = this.action.create({
      buttons: [
        {
          text: 'Get Bosch Products',
          handler: () => {
            console.log('Products clicked');
          }
        },{
          text: 'Get Help',
          handler: () => {
            this.nav.setRoot(SearchPage)
            console.log('Help clicked');
          }
        },{
          text: 'Earn More Points',
          handler: () => {
            this.earnmodal();
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  public earnmodal(){
    let alert = this.alert.create({
      title: 'Earn Points',
      subTitle: 'To earn points, answer requests, add new fixes, or stay active in your group.',
      buttons: ['OK']
    });
    alert.present();
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
}