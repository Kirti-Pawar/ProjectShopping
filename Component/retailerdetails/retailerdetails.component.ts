import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from '../services/retailer.service';

@Component({
  selector: 'app-retailerdetails',
  templateUrl: './retailerdetails.component.html',
  styleUrls: ['./retailerdetails.component.css']
})
export class RetailerdetailsComponent implements OnInit {
  retailers : any= [];
  status : any;
  retaileremail = sessionStorage.getItem('retaileremail');
  constructor(private router:Router,private retailerService:RetailerService) { }

  ngOnInit(): void {
    this.GetRetailerDetails(this.retaileremail);

  }
  GetRetailerDetails(retaileremail:any){
    this.retailers=this.retailerService.GetDetailsRetailerProfile(retaileremail);
    console.log("details");
  }
}
