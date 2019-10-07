import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PageService } from './service/page.service';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'help'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pageService: PageService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('mobile')) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }

      this.router.events.subscribe(event => {
        if (event instanceof ActivationStart) {
          // let child = this.route.firstChild;
          let child = event.snapshot;
          while (child.firstChild) {
            child = child.firstChild;
          }
          this.pageService.setTitle(child.data.title);
        }
      });
    });
  }
}
