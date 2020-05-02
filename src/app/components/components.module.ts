import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomHeaderComponent} from './custom-header/custom-header.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
    CustomHeaderComponent
  ],
  exports:[
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
      IonicModule
  ]
})
export class ComponentsModule { }
