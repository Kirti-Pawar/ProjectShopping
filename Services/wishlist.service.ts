import { Injectable } from "@angular/core";

@Injectable()
export class WishlistService{
    url:string=""
    constructor()
    {

    }
    Getwishlist(useremail:any)
    {
        return "wishlist"
    }
    RemoveProduct(wishlistid : number, productid:number) 
    {
        return "Product" ;
    }
    GetSubtotal(useremail : string){
        return "Subtotal";
    }

    AddToCart(productid: number){
        return "added";
    }
}