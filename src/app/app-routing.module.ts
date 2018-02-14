import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuraListComponent } from './sura';

const routes: Routes = [
  { path: '', component: SuraListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
