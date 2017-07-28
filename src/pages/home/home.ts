import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User, AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { Chart } from 'chart.js';
import { Points, PointsProvider } from '../../providers/points/points';
 
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
  points: Points;
  
  constructor(private nav: NavController, private auth: AuthService, private p: PointsProvider) {
    let info = this.auth.getUserInfo();
    this.username = info.fname;
    this.email = info.email;
    this.user = info;

    this.p.getpoints(this.user._id).then((data) => {
      if(data){
        
      }
    });

    this.auth.login(this.registerCredentials).then((data) => {
      // alert(JSON.stringify(data));
      if (data[0].password==this.registerCredentials.password) {
          this.nav.setRoot(HomePage);
        } else {
          this.showError("Access Denied");
        }
      })
      .catch(function(reason){
        this.showError(reason);
      });
  }

  ionViewDidLoad(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
 
        });
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
}