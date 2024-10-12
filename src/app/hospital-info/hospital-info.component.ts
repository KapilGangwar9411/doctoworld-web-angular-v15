import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.scss']
})
export class HospitalInfoComponent {
  toggleClass = false;
  toggleClass1 = true;
  toggleClass2 = false; 
  showSection = 1;

  constructor(private router: Router) { }

  saveInBookmark() {
    this.toggleClass = !this.toggleClass;
  }
  about() {
    this.toggleClass1 = !this.toggleClass1;
    this.toggleClass2 = false; 
    this.showSection = 1;
  }

  departments() {
    this.toggleClass2 = !this.toggleClass2;
    this.toggleClass1 = false; 
    this.showSection = 2;
  }
  cardBannerCarousel: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false,
    margin: 0,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
    }
  }

  doctorInfo() {
    this.router.navigateByUrl('doctor-info');
  }

}


