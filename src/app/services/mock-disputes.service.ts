import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDisputesService {
  dispute: object;
  constructor() { }

  disputes: Array<object> = [
  {disputeId: 1, clientName: 'client 1', disputeType: 'Bug', location: 'Toronto', severity: 'Low', selectedRow: '', description: 'sample description', contactNo: '1234567890', email: 'test@test.com', expectedResolution: 'expected resolution'},
  {disputeId: 2, clientName: 'client 2', disputeType: 'Software Update', location: 'Ottawa', severity: 'Medium', selectedRow: '', description: 'sample description', contactNo: '1234567890', email: 'test@test.com', expectedResolution: 'expected resolution'},
  {disputeId: 3, clientName: 'client 3', disputeType: 'HardWare Issue', location: 'Victoria', severity: 'High', selectedRow: '', description: 'sample description', contactNo: '1234567890', email: 'test@test.com', expectedResolution: 'expected resolution'},
  ];


  get() {
    return of(this.disputes);
  }

  getDisputeDetails(disputeId){
    this.dispute = null;
    this.disputes.forEach((dispute) =>{
      if( disputeId === dispute['disputeId']){
        this.dispute = dispute;
      }
    });
    return this.dispute;
  }
}
