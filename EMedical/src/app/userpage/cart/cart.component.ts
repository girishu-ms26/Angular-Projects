import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:cart[]|undefined;
 

  constructor(private cartService: CartService,
   private router: Router,
   private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart)=>{
      this.carts = cart;
    })
  }

  deleteCart(medicineId: number){
    alert('are you sure you want to delete??') ;
this.cartService.deleteCart(medicineId).subscribe((res)=>{
  this.getCart();
})
  }
  getCart() {
    this.cartService.getCart();
  }

  payment(){
    alert('Your Order Placed Succesfully') ;
    this.router.navigate(['/userpage'], {relativeTo: this.route});
  }
  back(){
   
    this.router.navigate(['/userpage'], {relativeTo: this.route});
  }
}
