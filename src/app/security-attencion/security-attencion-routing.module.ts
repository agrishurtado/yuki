import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityAttencionPage } from './security-attencion.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityAttencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityAttencionPageRoutingModule {}
