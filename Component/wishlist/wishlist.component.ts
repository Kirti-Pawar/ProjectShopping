import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  useremail:any = sessionStorage.getItem('useremail');
  status : any;
  remove: any;
  add:any;
  subtot : any;
  // buystatus : any;
  userwishlist : any = []
  subtotal : any = []
  // afterorder : boolean = false; 
  constructor(private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.status=this.wishlistService.Getwishlist(this.useremail)

    this.GetSubtotal(this.useremail);
  }

  Removefromwishlist(wishlistid:number,productid : number){
    this.remove = this.wishlistService.RemoveProduct(wishlistid, productid)
    // .subscribe(
    //   data =>{
    //     if(data == "Success"){
    //       if(this.afterorder){
    //         alert('Order placed Successfully');
    //       }else{
    //         alert('Item removed from cart');
    //       }
    //     }
    //   }
    // );
  }

  GetSubtotal(useremail: string){
    this.subtot = this.wishlistService.GetSubtotal(useremail);
  //   .subscribe(
  //     data =>{
  //       this.subtotal = data;
  //     }
  //   )
   }

   AddTocart(productid:number){
     this.add = this.wishlistService.AddToCart(productid);
   }

}
