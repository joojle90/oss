import { Component } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import {OssmapsPage} from '../ossmaps/ossmaps';

/*
  Generated class for the AmbulancePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/ambulance/ambulance.html',
})
export class AmbulancePage {

  constructor(private modalCtrl: ModalController, public alertCtrl: AlertController) {

  }
    
    callambulance() {
        let alert = this.alertCtrl.create({
          title: 'Call process',
          subTitle: 'We will direct you to the Hospital',
          buttons: ['OK']
        });
        alert.present();
    }
    

}
