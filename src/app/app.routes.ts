import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TableDynamicArrayDataExample } from './components/tabletest/tabletest.component';
import { AddVocabularyComponent } from './components/add-vocabulary/add-vocabulary.component';
import { AdminLteComponent } from './components/admin-lte/admin-lte.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'home', component:DashboardComponent},
    {path: 'login', component:LoginComponent},
    {path: 'tabletest', component:TableDynamicArrayDataExample},
    {path:'add', component:AddVocabularyComponent},
    {path:'admin', component:AdminLteComponent}
];
