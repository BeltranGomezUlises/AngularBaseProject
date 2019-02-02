import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { FwModule } from '../fw/fw.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';

import {appRoutes} from './app.routing';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintenanceComponent } from './country-maintenance/country-maintenance.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from 'src/fw/users/user-api';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryListComponent,
    CountryMaintenanceComponent,
    CountryDetailComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    FwModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],  
  providers:[
    UserService,
    { provide: UserApi, useExisting: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
