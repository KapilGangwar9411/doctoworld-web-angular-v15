import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
  address: string = '';
  title: string = 'Home';
  errorMessage: string = '';

  constructor(private activeModal: NgbActiveModal, private http: HttpClient) { }


  dismiss() {
    this.activeModal.close();
  }

  getLocation() {
    console.log("Attempting to get location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location retrieved:", position);
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log("Latitude:", lat, "Longitude:", lng);
          this.getAddress(lat, lng);
        },
        (error) => {
          this.errorMessage = 'Error getting location: ' + error.message;
          console.error(this.errorMessage);
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by this browser.';
      console.error(this.errorMessage);
    }
  }

  // Function to fetch address using Nominatim API
  getAddress(lat: number, lng: number) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (data && data.display_name) {
          this.address = data.display_name;
          console.log("Address retrieved:", this.address);
        } else {
          this.errorMessage = 'No address found for the provided coordinates.';
          console.error(this.errorMessage);
        }
      },
      (error) => {
        this.errorMessage = 'Error fetching address: ' + error.message;
        console.error(this.errorMessage);
      }
    );
  }


  addAddress() {
    this.getLocation();
  }
}
