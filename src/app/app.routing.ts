import {Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContriesComponent } from './contries/contries.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'contries', component: ContriesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', component: DashboardComponent},
    {path: '**', component: DashboardComponent},
];

