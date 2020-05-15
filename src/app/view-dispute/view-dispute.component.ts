import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { MockDisputesService } from './../services/mock-disputes.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-dispute',
  templateUrl: './view-dispute.component.html',
  styleUrls: ['./view-dispute.component.css']
})
export class ViewDisputeComponent implements OnInit {
  disputeForm: FormGroup;
  dispute: object;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private mockDisputeService: MockDisputesService, private formBuilder: FormBuilder,) { 
                this.dispute = this.mockDisputeService.getDisputeDetails(Number(this.route.snapshot.paramMap.get('id')));
                if( this.dispute !== null ){
                 this.disputeForm = this.formBuilder.group({
                   disputeId: [this.dispute['disputeId']],
                   clientName: [this.dispute['clientName']],
                   disputeType: [this.dispute['disputeType']],
                   location: [this.dispute['location']],
                   severity: [this.dispute['severity']],
                   description: [this.dispute['description']],
                   contactNo: [this.dispute['contactNo']],
                   email: [this.dispute['email']],
                   expectedResolution: [this.dispute['expectedResolution']],
                   comments: ['', [Validators.required]],
                   rEmail: ['', [Validators.required, Validators.email]]
                 });
                }
  }
  get f() { return this.disputeForm.controls; }
  ngOnInit() {
    
  }
  submitLogin(){
    this.submitted = true;
    if (this.disputeForm.invalid) {
      return;
  }
  alert('Form submit successfull with resolution comments as : '+this.disputeForm.value.comments+" and resolution persion email is : "+this.disputeForm.value.rEmail);
}

}
