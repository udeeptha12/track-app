import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ExpencesContextComponent } from './components/expences-context/expences-context.component';
import { SalaryContextComponent } from './components/salary-context/salary-context.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    DefaultComponent,
    DashboardHeaderComponent,
    ExpencesContextComponent,
    SalaryContextComponent,
    LoanContextComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
