import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessCreateOutPage } from './access-create-out.page';

const routes: Routes = [
  {
    path: '',
    component: AccessCreateOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessCreateOutPageRoutingModule {}
