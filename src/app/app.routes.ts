import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TableDynamicArrayDataExample } from './components/tabletest/tabletest.component';
import { AddVocabularyComponent } from './components/add-vocabulary/add-vocabulary.component';

export const routes: Routes = [
    {path: 'home', component:DashboardComponent},
    {path: 'login', component:LoginComponent},
    {path: 'tabletest', component:TableDynamicArrayDataExample},
    {path:'add', component:AddVocabularyComponent}
];
