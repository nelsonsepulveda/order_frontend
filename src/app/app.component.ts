import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  orders = [];
  pageInfo:any = {
    count: 0,
    current_page: 1,
    per_page: 10,
    total: 0,
    total_pages: 0,
  };
  strSearch = "";
  loading = false;
  constructor (private orderService: OrderService) {

  }
  ngOnInit() {
    this.refreshData();
  }

  async refreshData() {

    try {
      this.loading = true
      const rt:any =await  this.orderService.getOrders(this.pageInfo.current_page, this.pageInfo.per_page, this.strSearch);
      console.log(rt)
      this.orders = rt.data.map(item => ({
        id: item.id,
        ...item.attributes
      }))
      this.pageInfo = rt.meta.pagination;
    } catch(err) {
      console.log(err)
    }
    this.loading = false;
  }

  async changeStatus(item) {
    if(item.status === 'cancelled') {
      item.status = 'in_production'
    } else if(item.status === 'in_production') {
      item.status = 'pending'
    } else if(item.status === 'pending'){
      item.status = 'cancelled'
    } else {
      
    }
    try{
      const rt =await this.orderService.updateOrder(item.id, item.status)
      console.log(rt);
    } catch(err){
      console.log(err);
    }
  }
  pageChanged($event) {
    console.log($event)
    this.pageInfo.current_page = $event.page;
    this.refreshData();    
  }

}
