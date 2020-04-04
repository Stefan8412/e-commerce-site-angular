import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import{ StoreInfoService} from "../store-info.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
index:number;
productInfo: any;
  constructor(private route: ActivatedRoute, public storeInfo:StoreInfoService ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.index  = params["id"];
      this.productInfo = this.storeInfo.tiles.reduce((obj,itm)=>{
    return +this.index=== itm.id ? itm:obj;
  },{});
});
}}
