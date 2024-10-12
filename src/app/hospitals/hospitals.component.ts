import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  inputElement: any;
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
        items: 7,
        autoWidth:true,
      }
    },

  }
  hospitalInfo() {
    this.router.navigateByUrl('hospital-info');
  }
  hospitalList() {
    this.router.navigateByUrl('hospital-list'); 
  }
  
  ngOnInit() {
  }
 

}
