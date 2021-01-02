import { Retailer } from "../models/retailer.model";

export class RetailerService{
    retailers:Retailer[];
    constructor(){
        this.retailers = [
            new Retailer(1,"Retailer","Retailer@gmail.com","Retailer1234")
        ];
    }
    RetailerLogin(retaileremail:any,retailerpassword:any):boolean{
        var result:boolean = false;
        this.retailers.forEach(element  => {
            
            if(element.retaileremail == retaileremail && element.retailerpassword ==retailerpassword)
            {
                result=true;
            }
        });
        return result;
    }
    AddRetailer(retailer:Retailer)
    {
        this.retailers.push(retailer);
    }
    GetDetailsRetailerProfile(retaileremail:any)
    {
        return "success";
    }
    GetRetailerprofile(retaileremail:any)
    {
        return "success retailer";
    }
    ChangeRetailerPassword(retaileremail:any,oldpassword:any,newpassword:any)
    {
        return "Changed";
    }
   
}