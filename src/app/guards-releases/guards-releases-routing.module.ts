import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardsReleasesPage } from './guards-releases.page';

const routes: Routes = [
  {
    path: '',
    component: GuardsReleasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardsReleasesPageRoutingModule {}
