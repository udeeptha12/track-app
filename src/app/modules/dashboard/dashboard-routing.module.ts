import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardContextComponent} from "./components/dashboard-context/dashboard-context.component";
import {DefaultComponent} from "./components/default/default.component";
import {ExpencesContextComponent} from "./components/expences-context/expences-context.component";
import {LoanContextComponent} from "./components/loan-context/loan-context.component";
import {SalaryContextComponent} from "./components/salary-context/salary-context.component";

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'dashboard/process/home' ,pathMatch:'full'},
    {
      path: 'process', component: DashboardContextComponent, children: [
        {path: 'home', component: DefaultComponent},
        {path: 'expenses', component: ExpencesContextComponent},
        {path: 'loan', component: LoanContextComponent},
        {path: 'salary', component: SalaryContextComponent}
      ]
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
