import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabePageRoutingModule } from './fabe-routing.module';

import { FabePage } from './fabe.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		FabePageRoutingModule,
		ComponentsModule
	],
  declarations: [FabePage]
})
export class FabePageModule {}
