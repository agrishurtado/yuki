import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessOutPageRoutingModule } from './access-out-routing.module';

import { AccessOutPage } from './access-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessOutPageRoutingModule
  ],
  declarations: [AccessOutPage]
})
export class AccessOutPageModule {}
