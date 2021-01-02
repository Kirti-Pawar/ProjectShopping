import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordRetailetService } from '../services/forgotpassretailer.service';
import { PasswordCheck } from '../validators/passwordcheck';

@Component({
  selector: 'app-retailerforgetpassword',
  templateUrl: './retailerforgetpassword.component.html',
  styleUrls: ['./retailerforgetpassword.component.css']
})
export class RetailerforgetpasswordComponent implements OnInit {
  otpstatus : boolean = false;
  buttonname : any ='Get OTP';

  userotp : any;
  checkotp : number=0;

  otppattern : string = "^[0-9]{4}";

  retailerforgotpassForm: FormGroup;
  submitted=false;
  
  constructor(private formBuilder:FormBuilder,private forgotpassretailerService:ForgotPasswordRetailetService) {  
    this.retailerforgotpassForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.retailerforgotpassForm = this.formBuilder.group({

      email : new FormControl('',[Validators.required, Validators.email]),
      otp : new FormControl('',[Validators.required,Validators.pattern(this.otppattern)]),
      npass : new FormControl('',[Validators.required,Validators.minLength(6)]),
      cpass : new FormControl('',[Validators.required,Validators.minLength(6)])
    }
    ,
    {
      validators: PasswordCheck("npass", "cpass")
    }
    );
  }
  
  get f() { return this.retailerforgotpassForm.controls; }

  doChange(){
    if(this.checkotp == this.retailerforgotpassForm.value.otp && this.retailerforgotpassForm.valid){
      this.forgotpassretailerService.UpdateRetailer(this.retailerforgotpassForm.value.retaileremail,this.retailerforgotpassForm.value.npass)
    //   .subscribe(
    //     data => { 
    //       if(data == "Valid"){
    //         alert("Password changed successfully");
    //         this.router.navigate(['userlogin'])
    //       }
    //      }
    //   )
    //   this.forgetPasswordOTPForm.reset();
    }
    // if(this.checkotp != this.forgetPasswordOTPForm.value.otp && this.forgetPasswordOTPForm.valid){
    //   alert("Invalid OTP. Please enter correct OTP");
    // }
  }

  GetOtp()
  {
    this.otpstatus = !this.otpstatus
    this.forgotpassretailerService.SendOTP(this.retailerforgotpassForm.value.useremail)
    var data=1
    if(data == 0){
      alert('Please enter correct email id');
      this.buttonname = 'Get OTP';
      this.otpstatus = !this.otpstatus
      this.retailerforgotpassForm.reset();
    }else{
      alert("Please check your email for OTP");
      this.buttonname = 'Enter OTP';
      this.checkotp = data;
    }
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     if(data == 0){
    //       alert('Please enter correct email id');
    //       this.buttonname = 'Get OTP';
    //       this.otpstatus = !this.otpstatus
    //       this.forgetPasswordOTPForm.reset();
    //     }else{
    //       alert("Please check your email for OTP");
    //       this.buttonname = 'Enter OTP';
    //       this.checkotp = data;
    //     }
    //   }
    // );
  }

}
