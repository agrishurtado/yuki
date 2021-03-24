import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessMenuOutPage } from './access-menu-out.page';

const routes: Routes = [
  {
    path: '',
    component: AccessMenuOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessMenuOutPageRoutingModule {}
