/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from '../vehicle.service';

describe('Component: VehicleList', () => {
  it('should create an instance', () => {
    let component = new VehicleListComponent(this._injector.get(VehicleService));
    expect(component).toBeTruthy();
  });
});
