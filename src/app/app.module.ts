import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { FwModule } from '../fw/fw.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContriesComponent } from './contries/contries.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';

import {appRoutes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContriesComponent,
    SettingsComponent
  ],
  imports: [
    FwModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
