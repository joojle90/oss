import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the InsurancePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/insurance/insurance.html',
})
export class InsurancePage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }
    
    insuranceForm() {
        let alert = this.alertCtrl.create({
          title: 'Successful Registration',
          subTitle: 'Thank you for registration. We will process your form immediately',
          buttons: ['OK']
        });
        alert.present();
    }

}
