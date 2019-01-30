import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryMaintenanceComponent } from './country-maintenance/country-maintenance.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SignInComponent } from 'src/fw/users/sign-in/sign-in.component';

export const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    {
        path: 'authenticated', component: AuthenticatedUserComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'countries-maintenance', component: CountryMaintenanceComponent },
            { path: 'countries/:id', component: CountryDetailComponent },
        ]
    },    
    { path: '', component: SignInComponent },
    { path: '**', component: SignInComponent },
];

