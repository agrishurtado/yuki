import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessInputPage } from './access-input.page';

const routes: Routes = [
  {
    path: '',
    component: AccessInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessInputPageRoutingModule {}
