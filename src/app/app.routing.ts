import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryMaintenanceComponent } from './country-maintenance/country-maintenance.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SignInComponent } from 'src/fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from 'src/fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: 'register', component: RegisterUserComponent },
    {
        path: 'authenticated', component: AuthenticatedUserComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', canActivateChild: [AuthGuard], children: [
                    { path: '', component: DashboardComponent },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'settings', component: SettingsComponent },
                    { path: 'countries-maintenance', component: CountryMaintenanceComponent },
                    { path: 'countries/:id/:operation', component: CountryDetailComponent }
                ]
            }
        ]
    },
    { path: '', component: SignInComponent },
    { path: '**', component: SignInComponent },
];

