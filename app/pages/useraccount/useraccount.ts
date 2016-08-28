import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the UseraccountPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/useraccount/useraccount.html',
})
export class UseraccountPage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }
    
    userlogin() {
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'You are login now!',
          buttons: ['OK']
        });
        alert.present();
    }
    
    usersignup() {
        let alert = this.alertCtrl.create({
          title: 'Successful Sign Up',
          subTitle: 'Thank you for sign up to our application',
          buttons: ['OK']
        });
        alert.present();
    }
}
