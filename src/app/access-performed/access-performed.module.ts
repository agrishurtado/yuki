import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessPerformedPageRoutingModule } from './access-performed-routing.module';

import { AccessPerformedPage } from './access-performed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessPerformedPageRoutingModule
  ],
  declarations: [AccessPerformedPage]
})
export class AccessPerformedPageModule {}
