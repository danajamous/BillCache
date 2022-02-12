import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedBillsComponent } from './saved-bills/saved-bills.component';

const routes: Routes = [
  {path:'savedBills',component:SavedBillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
