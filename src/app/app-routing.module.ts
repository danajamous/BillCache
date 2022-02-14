import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedBillsComponent } from './saved-bills/saved-bills.component';
import { PaynewbillComponent } from './paynewbill/paynewbill.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';

const routes: Routes = [
  {path:'savedBills',component:SavedBillsComponent},
  {path:'paynewBills',component:PaynewbillComponent},
   {path:'paymentHistory',component:PaymenthistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
