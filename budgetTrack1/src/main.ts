import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';  
import { AddexpenseComponent } from './app/addexpense/addexpense.component';


Amplify.configure(awsExports);  

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: 'dashboard', component: DashboardComponent },
        {path : 'addExpense', component: AddexpenseComponent}
      ])
      
    )
  ],


});
