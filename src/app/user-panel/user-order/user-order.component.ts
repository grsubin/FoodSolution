import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { MenuService } from 'src/app/_services/menu.service';
import { Order } from 'src/app/_model/order';
import { OrderService } from 'src/app/_services/order.service';
import { Food } from 'src/app/_model/food';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {
  // order: Order;
  menuList = [];
  quantity = 0;
  error = false;
  isTyping = true;

  netTotal = 0;

  constructor(
    private _menuService: MenuService,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {

    this._menuService.getMenuList()
      .subscribe(data => {

        data = data.map(obj => ({...obj, quantity: 0}))
        this.menuList = data;
      });
  }

  calcTotal(){
    this.netTotal = 0;
    this.menuList.forEach(element => {

      this.netTotal += element.quantity * element.price;

      
    });
  }

  // onKeyUp(event, menu) {
  //   console.log(event.key);
  //   if (isNaN(Number(event.key))) {
  //     if (event.key === 'Backspace') {
  //       return;
  //     }
  //     menu.quantity = 0;
  //     this.isTyping = false;
  //   } else if (!this.isTyping) {
  //     menu.quantity = event.key;
  //     this.isTyping = true;
  //   }
  //   // onKeyUp(event){
  //   //   console.log(event.key);
  //   //   if(isNaN(Number(event.key))){
  //   //     if(event.key === 'Backspace'){
  //   //       return;
  //   //     }
  //   //     this.quantity = 0;
  //   //     this.isTyping = false;
  //   //   }else if(!this.isTyping){
  //   //     this.quantity = event.key;
  //   //     this.isTyping = true;
  //   //   }


  // }



  add(menu) {
    console.log(menu)
    menu.quantity++;
  }
  reduce(menu) {
    if (menu.quantity> 0)
      menu.quantity--;
  }

  // add(){
  //   this.quantity ++;
  // }
  // reduce(){

  //   if(this.quantity>0)
  //   this.quantity --;
  // }

  onSubmit() {
    console.log(localStorage.getItem('currentUser'));

    console.log(JSON.parse(localStorage.getItem('currentUser')).userName);
    // console.log(this.order.orderBy);
    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    let name = currentUser.userName;
    console.log(name);
    let r  = {
      orderBy: name,
      totalPrice: this.netTotal,
      foodOrders: []
    }
    this.menuList.forEach(element => {
      
      if(element.quantity != 0){
        r.foodOrders.push({
          foodId: element._id,
          quantity: element.quantity.toString(),
          price: element.price
        })
      }      
    });


    console.log(r);
    this._orderService.foodOrder(r)
      .subscribe(
        data =>{console.log('Success!: ', data)},
        error => console.log('Error: ', error)
      );
  
  }




} 
