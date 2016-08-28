import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the BombaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/bomba/bomba.html',
})
export class BombaPage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }

    callbomba() {
        let alert = this.alertCtrl.create({
          title: 'Call process',
          subTitle: 'We will direct you to the BOMBA station',
          buttons: ['OK']
        });
        alert.present();
    }
}
