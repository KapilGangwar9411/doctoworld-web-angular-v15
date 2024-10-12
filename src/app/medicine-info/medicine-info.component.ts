import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-medicine-info',
  templateUrl: './medicine-info.component.html',
  styleUrls: ['./medicine-info.component.scss']
})
export class MedicineInfoComponent {
  toggleClass = false;
  toggleClass1 = true;
  toggleClass2 = false;
  showSection = 1; 
  
  constructor(private router: Router) { }
  categoryCarousel: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,  
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      }, 
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      992: {
        items: 5
      },
      1240: {
        items: 7
      }
    },

  }
  saveInBookmark(){
    this.toggleClass = !this.toggleClass;
  }




  about() {
    this.toggleClass1 = !this.toggleClass1;
    this.toggleClass2 = false; 
    this.showSection = 1;
  }

  reviews() {
    this.toggleClass2 = !this.toggleClass2;
    this.toggleClass1 = false; 
    this.showSection = 2;
  }

  vendorInfo() {
    this.router.navigateByUrl('vendor-info');
  }
}
