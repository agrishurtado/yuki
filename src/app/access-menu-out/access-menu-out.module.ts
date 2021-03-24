import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessMenuOutPageRoutingModule } from './access-menu-out-routing.module';

import { AccessMenuOutPage } from './access-menu-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessMenuOutPageRoutingModule
  ],
  declarations: [AccessMenuOutPage]
})
export class AccessMenuOutPageModule {}
