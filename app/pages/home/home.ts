import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AmbulancePage} from '../ambulance/ambulance';
import {BombaPage} from '../bomba/bomba';
import {InsurancePage} from '../insurance/insurance';
import {PamPage} from '../pam/pam';
import {PdrmPage} from '../pdrm/pdrm';
import {RelaPage} from '../rela/rela';
import {UseraccountPage} from '../useraccount/useraccount';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
    
    
  }
    ambulancePage() {
        this.navCtrl.push(AmbulancePage);
      }
    bombaPage() {
        this.navCtrl.push(BombaPage);
      }
    insurancePage() {
        this.navCtrl.push(InsurancePage);
      }
    pamPage() {
        this.navCtrl.push(PamPage);
      }
    pdrmPage() {
        this.navCtrl.push(PdrmPage);
      }
    relaPage() {
        this.navCtrl.push(RelaPage);
      }
    useraccountPage() {
        this.navCtrl.push(UseraccountPage);
      }
}
