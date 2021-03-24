import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessMenuPage } from './access-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AccessMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessMenuPageRoutingModule {}
