import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessCreateOutPageRoutingModule } from './access-create-out-routing.module';

import { AccessCreateOutPage } from './access-create-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessCreateOutPageRoutingModule
  ],
  declarations: [AccessCreateOutPage]
})
export class AccessCreateOutPageModule {}
