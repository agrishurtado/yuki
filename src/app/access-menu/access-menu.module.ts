import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessMenuPageRoutingModule } from './access-menu-routing.module';

import { AccessMenuPage } from './access-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessMenuPageRoutingModule
  ],
  declarations: [AccessMenuPage]
})
export class AccessMenuPageModule {}
