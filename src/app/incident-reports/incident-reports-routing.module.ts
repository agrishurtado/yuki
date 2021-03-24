import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentReportsPage } from './incident-reports.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentReportsPageRoutingModule {}
