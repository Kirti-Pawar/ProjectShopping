import { Product } from "../models/product.model";
import { Retailer } from "../models/retailer.model";

export class ProductService{
   products:Product[];
    constructor(){
        this.products = [new Product()];
    }
    
    AddProduct(product:Product)
    {
        this.products.push(product);
        console.log("Added");
    }
    
    RemoveProduct(productid:number) 
    {
        return "Product" ;
    }
   
}