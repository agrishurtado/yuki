import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonAreasPageRoutingModule } from './common-areas-routing.module';

import { CommonAreasPage } from './common-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonAreasPageRoutingModule
  ],
  declarations: [CommonAreasPage]
})
export class CommonAreasPageModule {}
