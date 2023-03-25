import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuditLogComponent } from './audit-log.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
  ],
  exports: [AuditLogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
