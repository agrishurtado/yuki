import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentReportsPageRoutingModule } from './incident-reports-routing.module';

import { IncidentReportsPage } from './incident-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentReportsPageRoutingModule
  ],
  declarations: [IncidentReportsPage]
})
export class IncidentReportsPageModule {}
