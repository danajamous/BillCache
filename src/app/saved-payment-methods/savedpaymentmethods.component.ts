import { Component, OnInit } from '@angular/core';

export interface PaymentMethodElement {
  nickname: string;
  accountnumber: string;
  logo: string;
  action: string;
}

//database records
const ELEMENT_DATA: PaymentMethodElement[] = [
  {nickname:'Savings, Chase Bank', accountnumber: '******6690', logo: '', action: ''},
  {nickname:'Checking, BOA', accountnumber: '******6543', logo: '', action: ''},
];

@Component({
  selector: 'app-savedpaymentmethods',
  templateUrl: './savedpaymentmethods.component.html',
  styleUrls: ['./savedpaymentmethods.component.css']
})
export class SavedpaymentmethodsComponent implements OnInit {

  displayedColumns: string[] = ['nickname', 'accountnumber', 'logo', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
