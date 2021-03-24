import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessCreatePage } from './access-create.page';

const routes: Routes = [
  {
    path: '',
    component: AccessCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessCreatePageRoutingModule {}
