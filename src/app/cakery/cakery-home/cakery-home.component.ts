import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakery-home',
  templateUrl: './cakery-home.component.html',
  styleUrls: ['./cakery-home.component.scss']
})
export class CakeryHomeComponent implements OnInit {

 cakery_products = [{
  "name": "Ye-zy Cakes",
  "price": "$16.99/ea",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/ye_zy_cakes.jpg",
  "date": "March 6, 2022"
},

{
  "name": "The Barge",
  "price": "$7.99/ea",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/thebarge.jpg",
  "date": "March 8, 2022"
},

{
  "name": "Euphoria Donuts",
  "price": "$14.99/dozen",
  "type": "donut",
  "image": "../../../assets/cakery-assets/products/donuts.jpg",
  "date": "March 14, 2022"
},

{
  "name": "Queen Deepti Cake",
  "price": "$79.99",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/glamcake.jpg",
  "date": "January 14, 2022"
},

{
  "name": "One Love Cookies",
  "price": "$3.60/ea",
  "type": "cookie",
  "image": "../../../assets/cakery-assets/products/macarons.jpg",
  "date": "February 14, 2022"
},

{
  "name": "Deep Chocolate Donuts",
  "price": "11.99/dozen",
  "type": "donut",
  "image": "../../../assets/cakery-assets/products/chocolate_donut.jpg",
  "date": "February 6, 2022"
},

{
  "name": "Big Bundt",
  "price": "32.99",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/strawberry_bundt.jpg",
  "date": "January 16, 2022"

},

{
  "name": "Classic Chip Cookie",
  "price": "$12.99/dozen",
  "type": "cookie",
  "image": "../../../assets/cakery-assets/products/chocolate_chip_cookie.jpg",
  "date": "January 20, 2022"
},

{
  "name": "Oreo Dream Cake",
  "price": "$42.99/dozen",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/oreo_cake.jpg",
  "date": "February 26, 2022"
},

{
  "name": "Breakfast Cookie",
  "price": "$12.99/dozen",
  "type": "cookie",
  "image": "../../../assets/cakery-assets/products/oatmeal_cookie.jpg",
  "date": "February 22, 2022"
},

{
  "name": "Fairytale Cake",
  "price": "$32.99/dozen",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/fairytale_cake.jpg",
  "date": "February 20, 2022"
},

{
  "name": "Classic Donuts",
  "price": "$11.99/dozen",
  "type": "donut",
  "image": "../../../assets/cakery-assets/products/classic_donut.jpg",
  "date": "February 16, 2022"
},

{
  "name": "Kylie Cookie",
  "price": "$14.99/dozen",
  "type": "cookie",
  "image": "../../../assets/cakery-assets/products/rich_chocolate_cookie.jpg",
  "date": "February 10, 2022"
},

{
  "name": "Choccie Donut",
  "price": "$14.99/dozen",
  "type": "donut",
  "image": "../../../assets/cakery-assets/products/choccie_donut.jpg",
  "date": "January 17, 2022"
},

{
  "name": "Tirami-sue Cake",
  "price": "$29.99",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/tiramisu.jpg",
  "date": "January 15, 2022"
},

{
  "name": "Assorted Donuts",
  "price": "$13.99/dozen",
  "type": "donut",
  "image": "../../../assets/cakery-assets/products/assorted_donuts.jpg",
  "date": "January 10, 2022"
},

{
  "name": "Great White Cake",
  "price": "49.99",
  "type": "cake",
  "image": "../../../assets/cakery-assets/products/mono_cake.jpg",
  "date": "January 8, 2022"
},

{
  "name": "The Trump Stripe",
  "price": "$11.99/dozen",
  "type": "donut",
  "image": "../../../assets/cakery-assets/products/trump_stripe_donut.jpg",
  "date": "December 30, 2021"

},

{
  "name": "Cranberry Spice Cookie",
  "price": "$11.99/dozen",
  "type": "cookie",
  "image": "../../../assets/cakery-assets/products/cranberry_cookie.jpg",
  "date": "December 20, 2021"
}]


insta_products:any[]=[];

  constructor() { }


  ngOnInit(): void {
    this.randomProducts();
 }

 //gets random products for instagram display
 randomProducts(){
    for(var i = 0; i< 4; i++){
      this.insta_products.push(this.cakery_products[Math.floor(Math.random() * this.cakery_products.length)])
    }
  }


}
