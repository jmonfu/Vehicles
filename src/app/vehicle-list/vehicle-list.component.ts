import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { VehicleDetailsComponent } from '../vehicle-details/./vehicle-details.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
    vehicles: Vehicle[] = [];
    selectedVehicle: Vehicle;

    constructor(private vehicleService:VehicleService) {
      this.vehicles = this.vehicleService.getVehicles();
     }

    ngOnInit() {
    }

    onSelect(vehicle:Vehicle){this.selectedVehicle=vehicle};
}
