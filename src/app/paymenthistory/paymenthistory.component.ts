import { Component, OnInit } from '@angular/core';

export interface PaymentElement {
  billdate: string;
  billername: string;
  servicename: string;
  billingnumer: string;
  status: string;
}

const ELEMENT_DATA: PaymentElement[] = [
  {billdate:'01-20-21', billername: 'T-mobile', servicename: 'Prepaid', billingnumer: '13023', status :'Success'},
   {billdate:'04-10-21', billername: 'DMV Virginia', servicename: 'Car Title', billingnumer: '111023', status :'Success'},
  {billdate:'11-21-20', billername: 'Florist Shop', servicename: 'Gift', billingnumer: 'VA-13023', status :'Success'},
  {billdate:'11-20-20', billername: 'Florist Shop', servicename: 'Gift', billingnumer: 'VA-13023', status :'Fail'},
];

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

  displayedColumns: string[] = ['billdate', 'billername', 'servicename', 'billingnumer','status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
