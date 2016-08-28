import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the PamPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pam/pam.html',
})
export class PamPage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }
    
    public event = {
        month: '2016-08-26',
        ends: '2016-08-28',
        timeStarts: '13:00',
        timeEnds: '18:00'
    }
    
    jpamMap() {
        let alert = this.alertCtrl.create({
          title: 'Coming Soon',
          subTitle: 'You will be directed to JPAM Map',
          buttons: ['OK']
        });
        alert.present();
    }

}
