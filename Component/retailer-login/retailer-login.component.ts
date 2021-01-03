import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Retailer } from '../models/retailer.model';
import { RetailerService } from '../services/retailer.service';


@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit 
{
  retailer:Retailer;
  loginForm:FormGroup;
  submitted:boolean=false;
  check:boolean=false;
  checkpassword:any;
  status:any;

  constructor(private retailerservice:RetailerService,private formBuilder: FormBuilder)
   { 
    this.retailer=new Retailer();
    this.loginForm=formBuilder.group({})

   
   }
   login()
   {
     //this.userservice.addUser(user);
     //this.user=new User()
     this.submitted = true;
     console.log(this.retailer.retailerpassword)
     console.log(this.checkpassword)
     if(this.retailer.retailerpassword!=this.checkpassword)
     {
       console.log(this.retailer.retailerpassword)
       console.log(this.checkpassword)
       this.check=true;
     }
     else{
       this.check=false;
     }
   
       if (this.loginForm.invalid) {
           return;
       }
       else
       {
          this.status = this.retailerservice.AddRetailer(this.retailer)
         //.subscribe(
         //     data=> {
         //       if(data == "success"){
         //         alert("Successfully registered");
         //         this.router.navigate(['userlogin']);
         //       }else{
         //         alert("Email id is already registered");
         //       }
         //     }
         //   )
       }
   }

  ngOnInit(): void 
  {
    this.loginForm = this.formBuilder.group({
      Retailerloginname:['',[Validators.required,Validators.minLength(4),Validators.pattern('^[A-Za-z]$')]],
      Retailerloginpassword:['',[Validators.required,,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/')]],
      
     
  });

  }
  
  get f() { 
    return this.loginForm.controls; 
  }

}
