import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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

  bannerCarousel: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,  
    nav: false,
    margin: 15,
    stagePadding: 20,
    responsive: {
      0: {
        items: 1.1
      }, 
      400: {
        items: 1.5
      },
      768: {
        items: 2.1,
        stagePadding: 30,
      },
      992: {
        items: 3,
        stagePadding: 35,
      },
      1280: {
        items: 8, 
        stagePadding: 70,
      },
      1440: {
        stagePadding: 120,
        items: 4, 
      },
      1600: {
        stagePadding: 140,
        items: 4.5, 
      }, 
      1920: {
        stagePadding: 310,
        items: 5.5, 
      },
      3500: {
        stagePadding: 1150,
        items: 6, 
      },
      7000: {
        stagePadding: 3200,
        items: 8, 
      }
    },

  }
  vendorInfo() {
    this.router.navigateByUrl('vendor-info');
  }
  medicine_info() {
    this.router.navigateByUrl('medicine-info');
  }
 

}
