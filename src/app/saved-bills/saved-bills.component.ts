import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-bills',
  templateUrl: './saved-bills.component.html',
  styleUrls: ['./saved-bills.component.css']
})


export class SavedBillsComponent {
  id2: string = "";
  data: Array<any>;
  displayedColumns: string[] = ['id', 'billerName', 'serviceName', 'billingNumber', 'amountToPay', 'inquire'];
  constructor() {
    this.data = [{ id: 1, billerName: 'T-Mobile', serviceName: "Prepaid", billingNumber: "202345555", amountToPay: 5.50 },
    { id: 2, billerName: 'George Mason University ', serviceName: "Student Balance", billingNumber: "G-3788", amountToPay: 5000 },
    { id: 3, billerName: 'Dominion Energy', serviceName: "Energy Bill", billingNumber: "7107 Alexandria", amountToPay: 220 },]
  }


  deleteRow(id: any) {
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].id === id) {
        this.data.splice(i, 1);
      }
    }
  }
  inquire(element: any) {
    this.id2 = "amountToPayInput" + element.id;
    (<HTMLInputElement>document.getElementById(this.id2)).value = element.amountToPay;
  }
}

