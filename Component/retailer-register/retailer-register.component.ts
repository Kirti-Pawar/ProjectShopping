import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Retailer } from '../models/retailer.model';
import { RetailerService } from '../services/retailer.service';


@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit 
{
  retailer:Retailer
  registerForm:FormGroup;
  submitted:boolean=false;
  check:boolean=false;
  checkpassword:any;
  status:any;

  constructor(private retailerservice:RetailerService,private formBuilder: FormBuilder) 
  { 
    this.retailer=new Retailer();
      this.registerForm=formBuilder.group({})

  }
  register()
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
  
      if (this.registerForm.invalid) {
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
    this.registerForm = this.formBuilder.group({
      Retaileremail:['',[Validators.required,Validators.email]],
      Retailername:['',[Validators.required,Validators.minLength(4),Validators.pattern('^[A-Za-z]$')]],
      Retailerpassword:['',[Validators.required,,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/)]],
      
     
  });
}
  
  get f() { 
    return this.registerForm.controls; 
  }
  

}
