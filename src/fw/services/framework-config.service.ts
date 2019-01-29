import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface FrameworkConfigSettings {
  showLanguagesSelector?: boolean,
  showUserControls?: true,
  showStatusBar?: boolean,
  showStatusBarBreakpoint: number,
  socialIcons?: Array<IconFiles>
}

@Injectable({
  providedIn: 'root'
})
export class FrameworkConfigService {

  showLanguagesSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();

  configure(setting: FrameworkConfigSettings): void {
    Object.assign(this, setting);    
  }

}
