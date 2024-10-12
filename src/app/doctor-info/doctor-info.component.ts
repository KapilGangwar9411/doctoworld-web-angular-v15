import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.scss']
})
export class DoctorInfoComponent {
  toggleClass = false;
  toggleClass1 = true;
  toggleClass2 = false;
  toggleClass3 = false;
  showSection = 1;

  constructor(private router: Router) { }

  saveInBookmark() {
    this.toggleClass = !this.toggleClass;
  }




  about() {
    this.toggleClass1 = !this.toggleClass1;
    this.toggleClass2 = false;
    this.toggleClass3 = false;
    this.showSection = 1;
  }

  feedbacks() {
    this.toggleClass2 = !this.toggleClass2;
    this.toggleClass1 = false;
    this.toggleClass3 = false;
    this.showSection = 2;
  }
  availability() {
    this.toggleClass3 = !this.toggleClass3;
    this.toggleClass1 = false;
    this.toggleClass2 = false;
    this.showSection = 3;
  }

  vendorInfo() {
    this.router.navigateByUrl('vendor-info');
  }
  hospitalInfo() {
    this.router.navigateByUrl('hospital-info');
  }
  appointmentBooked() {
    this.router.navigateByUrl('appointment-booked');
  }
}

