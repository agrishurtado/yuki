import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityAttencionPageRoutingModule } from './security-attencion-routing.module';

import { SecurityAttencionPage } from './security-attencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityAttencionPageRoutingModule
  ],
  declarations: [SecurityAttencionPage]
})
export class SecurityAttencionPageModule {}
