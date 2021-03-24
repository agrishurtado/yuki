import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessPerformedPage } from './access-performed.page';

const routes: Routes = [
  {
    path: '',
    component: AccessPerformedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessPerformedPageRoutingModule {}
