import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDisputesComponent } from './client-disputes.component';

describe('ClientDisputesComponent', () => {
  let component: ClientDisputesComponent;
  let fixture: ComponentFixture<ClientDisputesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDisputesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDisputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
