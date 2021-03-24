import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessCreatePageRoutingModule } from './access-create-routing.module';

import { AccessCreatePage } from './access-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessCreatePageRoutingModule
  ],
  declarations: [AccessCreatePage]
})
export class AccessCreatePageModule {}
