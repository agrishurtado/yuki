import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonAreasPage } from './common-areas.page';

const routes: Routes = [
  {
    path: '',
    component: CommonAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonAreasPageRoutingModule {}
