import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-booked',
  templateUrl: './appointment-booked.component.html',
  styleUrls: ['./appointment-booked.component.scss']
})
export class AppointmentBookedComponent {
  constructor(private router: Router) { }

  my_appointment() {
    this.router.navigateByUrl('my-appointment');
  }

  home() {
    this.router.navigateByUrl('home');
  }
}
