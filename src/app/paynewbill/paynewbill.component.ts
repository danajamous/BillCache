import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

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
  post: any = '';
  billingNumber: any = '';
  //parentPost:any[]=[];


  constructor(private getData: GetDataService) { }
  categories: Category[] = [
    { value: 'Telecommunication-0', viewValue: 'Telecommunication' },
    { value: 'Electricity-1', viewValue: 'Electricity' },
    { value: 'Education-2', viewValue: 'Education' },
    { value: 'Government-3', viewValue: 'Government Services' },
    { value: 'Charity-2', viewValue: 'Charity' },
  ];

  ngOnInit(): void {
  }


  add(v: any) {
    //console.log( this.billingNumber);
    //this.getData.parentPost.push(this.billingNumber);
    
    this.getData.parentPost.push(v);
  }

  addPost(post: any) {
    //console.log(post);
    this.getData.parentPost.push(post);
    //this.getData.parentPost.push('Billing number &nbsp;&nbsp;'+this.billingNumber);
   // this.getData.parentPost.forEach(entry => {
      //  console.log(entry);
   // })
  }
}