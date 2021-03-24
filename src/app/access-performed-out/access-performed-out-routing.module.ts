import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessPerformedOutPage } from './access-performed-out.page';

const routes: Routes = [
  {
    path: '',
    component: AccessPerformedOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessPerformedOutPageRoutingModule {}
