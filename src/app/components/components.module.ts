import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomHeaderComponent} from './custom-header/custom-header.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {PopinfoComponent} from './popinfo/popinfo.component';

@NgModule({
	declarations: [
		CustomHeaderComponent,
		MenuComponent,
		PopinfoComponent
	],
	exports: [
		CustomHeaderComponent,
		MenuComponent,
		PopinfoComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		RouterModule
	]
})
export class ComponentsModule {
}
