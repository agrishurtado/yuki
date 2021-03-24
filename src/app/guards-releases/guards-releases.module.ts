import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardsReleasesPageRoutingModule } from './guards-releases-routing.module';

import { GuardsReleasesPage } from './guards-releases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardsReleasesPageRoutingModule
  ],
  declarations: [GuardsReleasesPage]
})
export class GuardsReleasesPageModule {}
