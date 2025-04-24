import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetgoalComponent } from './setgoal/setgoal.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addExpense', component: AddexpenseComponent },
  { path: 'setGoal', component: SetgoalComponent }
];