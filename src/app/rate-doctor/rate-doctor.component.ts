import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rate-doctor',
  templateUrl: './rate-doctor.component.html',
  styleUrls: ['./rate-doctor.component.scss']
})
export class RateDoctorComponent {
  ratingIcon1 = false;
  ratingIcon2 = false;
  ratingIcon3 = false;
  ratingIcon4 = false;
  ratingIcon5 = false;
  ratingIcon6 = false;
  ratingIcon7 = false;
  ratingIcon8 = false;
  ratingIcon9 = false;
  ratingIcon10 = false;
  ratingIcon11 = false;
  ratingIcon12 = false;
  ratingIcon13 = false;
  ratingIcon14 = false;
  ratingIcon15 = false;
  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }
  close() {
    this.activeModal.close();
  }

  
toggleRatingIcon1(){
  this.ratingIcon1 = !this.ratingIcon1;
  } 
toggleRatingIcon2(){
  this.ratingIcon2 = !this.ratingIcon2;
  }
toggleRatingIcon3(){
  this.ratingIcon3 = !this.ratingIcon3;
  }
toggleRatingIcon4(){
  this.ratingIcon4 = !this.ratingIcon4;
  } 
toggleRatingIcon5(){
  this.ratingIcon5 = !this.ratingIcon5;
  }
toggleRatingIcon6(){
  this.ratingIcon6 = !this.ratingIcon6;
  } 
toggleRatingIcon7(){
  this.ratingIcon7 = !this.ratingIcon7;
  }
toggleRatingIcon8(){
  this.ratingIcon8 = !this.ratingIcon8;
  }
toggleRatingIcon9(){
  this.ratingIcon9 = !this.ratingIcon9;
  } 
toggleRatingIcon10(){
  this.ratingIcon10 = !this.ratingIcon10;
  }
toggleRatingIcon11(){
  this.ratingIcon11 = !this.ratingIcon11;
  }
toggleRatingIcon12(){
  this.ratingIcon12 = !this.ratingIcon12;
  }
toggleRatingIcon13(){
  this.ratingIcon13 = !this.ratingIcon13;
  }
toggleRatingIcon14(){
  this.ratingIcon14 = !this.ratingIcon14;
  }
toggleRatingIcon15(){
  this.ratingIcon15 = !this.ratingIcon15;
  }
}
