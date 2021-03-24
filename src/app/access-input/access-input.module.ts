import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessInputPageRoutingModule } from './access-input-routing.module';

import { AccessInputPage } from './access-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessInputPageRoutingModule
  ],
  declarations: [AccessInputPage]
})
export class AccessInputPageModule {}
