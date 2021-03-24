import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessPerformedOutPageRoutingModule } from './access-performed-out-routing.module';

import { AccessPerformedOutPage } from './access-performed-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessPerformedOutPageRoutingModule
  ],
  declarations: [AccessPerformedOutPage]
})
export class AccessPerformedOutPageModule {}
