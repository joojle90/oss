import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the RelaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/rela/rela.html',
})
export class RelaPage {

    constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

    }

    relaService: string = "ST04";
    
    public event = {
        month: '2016-08-26',
        ends: '2016-08-28',
        timeStarts: '13:00',
        timeEnds: '18:00'
    }
    
    relaMap() {
        let alert = this.alertCtrl.create({
          title: 'Coming Soon',
          subTitle: 'You will be directed to RELA Map',
          buttons: ['OK']
        });
        alert.present();
    }
}
