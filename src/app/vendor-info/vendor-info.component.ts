import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.scss']
})
export class VendorInfoComponent { 
  constructor(private router: Router, private modalService: NgbModal) { }
  medicine_info() {
    this.router.navigateByUrl('medicine-info');
  }
}
