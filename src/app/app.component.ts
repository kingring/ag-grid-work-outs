import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { AuditLogComponent } from './audit-log.component';
import { ROW_DATA, COL_DEFS, AuditLog } from './grid-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ag-grid-project';

  constructor(private dialog: MatDialog) {
    // constructor
  }
  ngOnInit(): void {
    // oninint
  }
  openGridModal(): void {
    this.dialog.open(AuditLogComponent, {
      width: '100%',
      disableClose: true
    });
  }
}
