import { Component, OnInit } from '@angular/core';
interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {

  constructor() { }
  categories: Category[] = [
    
  ];

  ngOnInit(): void {
  }

}
