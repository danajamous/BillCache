import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedBillsComponent } from './saved-bills/saved-bills.component';
import { PaynewbillComponent } from './paynewbill/paynewbill.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { BillSummaryComponent } from './bill-summary/bill-summary.component';
import { AccountsettingsComponent } from './account-settings/accountsettings.component';
import { SavedpaymentmethodsComponent } from './saved-payment-methods/savedpaymentmethods.component';

const routes: Routes = [
  {path:'savedBills',component:SavedBillsComponent},
  {path:'paynewBills',component:PaynewbillComponent},
   {path:'paymentHistory',component:PaymenthistoryComponent},
   {path:'billSummary',component:BillSummaryComponent},
   {path:'accountSettings',component:AccountsettingsComponent},
   {path:'savedPaymentMethod', component:SavedpaymentmethodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
