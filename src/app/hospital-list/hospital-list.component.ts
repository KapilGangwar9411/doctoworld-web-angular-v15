import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent { 
  showMoreOpction1 = false; 
  constructor(private router: Router) { }
  hospitalInfo() {
    this.router.navigateByUrl('hospital-info');
  }

  showMoreOpctionToggle1() {   
    this.showMoreOpction1 = true;  
  }
 
  cloesDropDown() { 
    this.showMoreOpction1 = false;  
  }
}
