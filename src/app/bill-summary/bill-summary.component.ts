import { Component, OnInit,Input } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {

  @Input () childPosts:any[]=[];
  constructor(private getData:GetDataService){
    this.childPosts =this.getData.parentPost;
  }

  ngOnInit(): void {
  }

}
