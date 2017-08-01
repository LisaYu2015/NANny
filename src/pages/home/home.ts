import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { Chart } from 'chart.js';
import { Points, PointsProvider } from '../../providers/points/points';
import { PointsPage } from '../points/points'
import { EarnpointsPage } from '../earnpoints/earnpoints'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  username: string;
  email:string;
  user: User;
  all_points: any;
  p_comment = [];
  p_fixes = [];
  p_request = [];

  
  constructor(private nav: NavController, private auth: AuthService, private p: PointsProvider, public modalCtrl: ModalController) {
    let info = this.auth.getUserInfo();
    this.username = info.fname;
    this.email = info.email;
    this.user = info;

    this.p.getpoints(this.user._id).then((data) => {
      if(data){
        this.all_points = data;
        alert(this.all_points.length);
        for (var i = 0; i < this.all_points.length ; i++) {
          this.p_comment.push(this.all_points[i].a_comment *5);
          this.p_fixes.push(this.all_points[i].a_fix *10);
          this.p_request.push(this.all_points[i].a_request *2);

        }
        alert(this.p_comment);
      } 
    });
  }

  ionViewDidLoad(){

    var colors = {
      green: {
        fill: '#e0eadf',
        stroke: '#5eb84d',
      },
      lightBlue: {
        stroke: '#6fccdd',
      },
      darkBlue: {
        fill: '#92bed2',
        stroke: '#3282bf',
      },
      purple: {
        fill: '#8fa8c8',
        stroke: '#75539e',
      },
    };

    // var ctx = this.lineCanvas.getContext("2D");
    // ctx.canvas.

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: "New Fixes",
          fill: true,
          backgroundColor: colors.purple.fill,
          pointBackgroundColor: colors.purple.stroke,
          borderColor: colors.purple.stroke,
          pointHighlightStroke: colors.purple.stroke,
          borderCapStyle: 'butt',
          data: this.p_fixes,
        }, {
          label: "Comments",
          fill: true,
          backgroundColor: colors.darkBlue.fill,
          pointBackgroundColor: colors.darkBlue.stroke,
          borderColor: colors.darkBlue.stroke,
          pointHighlightStroke: colors.darkBlue.stroke,
          borderCapStyle: 'butt',
          data: this.p_comment,
        }, {
          label: "Answering Requests",
          fill: true,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.green.stroke,
          borderColor: colors.green.stroke,
          pointHighlightStroke: colors.green.stroke,
          data: this.p_request,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
          }]
        },
        animation: {
          duration: 750,
        },
      }
    });


    // this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
    //         type: 'line',
    //         data: {
    //             labels: ["January", "February", "March", "April", "May", "June", "July"],
    //             datasets: [
    //                 {
    //                     label: "My First dataset",
    //                     fill: false,
    //                     lineTension: 0.1,
    //                     backgroundColor: "rgba(75,192,192,0.4)",
    //                     borderColor: "rgba(75,192,192,1)",
    //                     borderCapStyle: 'butt',
    //                     borderDash: [],
    //                     borderDashOffset: 0.0,
    //                     borderJoinStyle: 'miter',
    //                     pointBorderColor: "rgba(75,192,192,1)",
    //                     pointBackgroundColor: "#fff",
    //                     pointBorderWidth: 1,
    //                     pointHoverRadius: 5,
    //                     pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //                     pointHoverBorderColor: "rgba(220,220,220,1)",
    //                     pointHoverBorderWidth: 2,
    //                     pointRadius: 1,
    //                     pointHitRadius: 10,
    //                     data: [65, 59, 80, 81, 56, 55, 40],
    //                     spanGaps: false,
    //                 }
    //             ]
    //         }
 
    //     });
  }

  public pointsmodal(){
    let modal = this.modalCtrl.create(PointsPage);
    modal.present();
  }

  public earnmodal(){
    let modal = this.modalCtrl.create(EarnpointsPage);
    modal.present();
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
}