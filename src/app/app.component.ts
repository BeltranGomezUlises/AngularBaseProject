import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service';
import { MenuService } from 'src/fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService) {
    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/google.png', alt: 'Google', link: 'http://www.google.com' },
        { imageFile: 'assets/fb.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/twiter.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguagesSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    }
    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }




}
