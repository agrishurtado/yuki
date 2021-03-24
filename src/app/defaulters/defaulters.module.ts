import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefaultersPageRoutingModule } from './defaulters-routing.module';

import { DefaultersPage } from './defaulters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultersPageRoutingModule
  ],
  declarations: [DefaultersPage]
})
export class DefaultersPageModule {}
