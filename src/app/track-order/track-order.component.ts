import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent {

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }
  close() {
    this.activeModal.close();
  }
}
