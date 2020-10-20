import { Component, OnInit } from '@angular/core';
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  response: String;
  input= "";

  constructor(private serviceOrder:OrderService) { }

  ngOnInit(): void {
  }

  launchRegistration(text){
    this.input = text;
    this.serviceOrder.postOrder(text).subscribe(data =>
      this.response = data)
  }

  onSubmit() {

  }
}
