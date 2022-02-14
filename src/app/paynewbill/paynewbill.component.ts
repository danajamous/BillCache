import { Component, OnInit } from '@angular/core';
interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-paynewbill',
  templateUrl: './paynewbill.component.html',
  styleUrls: ['./paynewbill.component.css']
})
export class PaynewbillComponent implements OnInit {

  constructor() { }
  categories: Category[] = [
    {value: 'Telecommunication-0', viewValue: 'Telecommunication'},
    {value: 'Electricity-1', viewValue: 'Electricity'},
    {value: 'Education-2', viewValue: 'Education'},
     {value: 'Government-3', viewValue: 'Government Services'},
      {value: 'Charity-2', viewValue: 'Charity'},
  ];

  ngOnInit(): void {
  }

}
