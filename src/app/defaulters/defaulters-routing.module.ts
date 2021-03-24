import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultersPage } from './defaulters.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultersPageRoutingModule {}
