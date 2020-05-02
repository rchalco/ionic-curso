import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabePage } from './fabe.page';

const routes: Routes = [
  {
    path: '',
    component: FabePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabePageRoutingModule {}
