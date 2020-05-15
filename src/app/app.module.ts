import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { ClientDisputesComponent } from './client-disputes/client-disputes.component';
import { RouterModule } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { ViewDisputeComponent } from './view-dispute/view-dispute.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDisputesComponent,
    NavigateComponent,
    ViewDisputeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {path: '', component: ClientDisputesComponent},
      {path: 'disputes', component: ClientDisputesComponent},
      {path: 'home', component: NavigateComponent},
      {path: 'view/:id', component: ViewDisputeComponent},
    ])
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
