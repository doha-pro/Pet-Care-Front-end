import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardingListComponent } from './boarding-list/boarding-list.component';

const routes: Routes = [
  {path:'board',component:BoardingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
