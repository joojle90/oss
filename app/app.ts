import {Component, ViewChild, Type} from '@angular/core';
import {ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {TabsPage} from './pages/tabs/tabs';
import {NewsPage} from './pages/news/news';
import {RelaPage} from './pages/rela/rela';
import {InsurancePage} from './pages/insurance/insurance';
import {BombaPage} from './pages/bomba/bomba';


@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    private rootPage: Type = TabsPage;

    pages: Array<{ title: string, component: Type, icon: string }>;

    constructor(private platform: Platform) {
        this.pages = [
            { title: 'Home', component: TabsPage, icon: 'home'},
            { title: 'Menu 2', component: NewsPage, icon: 'flag' },
            { title: 'Menu 3', component: RelaPage, icon: 'information-circle' },
            { title: 'Menu 4', component: InsurancePage, icon: 'globe' },
            { title: 'Menu 5', component: BombaPage, icon: 'navigate' }
        ];

        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);

