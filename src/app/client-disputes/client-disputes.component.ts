import { Component, OnInit } from '@angular/core';
import { MockDisputesService } from './../services/mock-disputes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-disputes',
  templateUrl: './client-disputes.component.html',
  styleUrls: ['./client-disputes.component.css']
})
export class ClientDisputesComponent implements OnInit {
  disputes: Array<object>;
  displayedColumns: string[];
  rowId: number;
  constructor(private mockDisputeService: MockDisputesService,
              private router: Router) { }

  ngOnInit() {
    
    this.mockDisputeService.get().subscribe(res => {
      this.disputes = res;
      this.displayedColumns = ['disputeId', 'clientName', 'disputeType', 'location', 'severity', 'selectedRow'];
    });
  }
  selectedRow(rowId){
    this.router.navigate(['/view', rowId]);

  }
    

}
