import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrackOrderComponent } from '../track-order/track-order.component';
import { RateProductComponent } from '../rate-product/rate-product.component';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  toggleClass = false;
  appointmentInfo = false;
  addClass1 = false;
  addClass2 = false;
  addClass3 = false;
  addClass4 = false;
  addClass5 = false;
  showSection = 1; 
  constructor(private router: Router, private modalService: NgbModal) { }
  ngOnInit() {
    setTimeout(() => this.showAppointmentPlaceholder(), 1000);
  }

  showAppointment1(){
    this.addClass1 = !this.addClass1;
    this.appointmentInfo = !this.appointmentInfo;
    this.showSection = 2; 
    this.addClass2 = false; 
    this.addClass3 = false; 
    this.addClass4 = false; 
    this.addClass5 = false; 
  }
  showAppointment2(){
    this.addClass2 = !this.addClass2;
    this.appointmentInfo = !this.appointmentInfo;
    this.showSection = 2;  

    this.addClass1 = false; 
    this.addClass3 = false; 
    this.addClass4 = false; 
    this.addClass5 = false; 
  }
  showAppointment3(){
    this.addClass3 = !this.addClass3;
    this.appointmentInfo = !this.appointmentInfo;
    this.showSection = 2;  

    this.addClass2 = false; 
    this.addClass1 = false; 
    this.addClass4 = false; 
    this.addClass5 = false; 
  }
  showAppointment4(){
    this.addClass4 = !this.addClass4;
    this.appointmentInfo = !this.appointmentInfo;
    this.showSection = 2;  

    this.addClass2 = false; 
    this.addClass3 = false; 
    this.addClass1 = false; 
    this.addClass5 = false; 
  }
  showAppointment5(){
    this.addClass5 = !this.addClass5;
    this.appointmentInfo = !this.appointmentInfo;
    this.showSection = 2;  

    this.addClass2 = false; 
    this.addClass3 = false; 
    this.addClass4 = false; 
    this.addClass1 = false; 
  }
 
  showSectionButton(position: number) {
    this.showSection = position;  
  }


  showAppointmentPlaceholder(){
    this.toggleClass = !this.toggleClass;
    this.showSection = 1;  
  }

  hideAppointmentPlaceholder(){
    this.toggleClass = false;
  }

  closeAppointmentInfoModel(){
    this.appointmentInfo = false;
  }

  trackOrder() {
    const modalRef = this.modalService.open(TrackOrderComponent, {windowClass: 'fullWidth'}) ;
  }

  review_now() {
    const modalRef = this.modalService.open( RateProductComponent, {windowClass: 'fullWidth'}) ;
  }

}


 