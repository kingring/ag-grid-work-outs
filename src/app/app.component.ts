import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { AuditLogComponent } from './audit-log.component';
import { ROW_DATA, COL_DEFS } from './grid-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ag-grid-project';
  gridRowData:any;
  gridColumnDefs: any;
  domLayout = 'autoHeight';
  constructor(private dialog: MatDialog) {
    // constructor
    this.gridColumnDefs = COL_DEFS;
  }
  ngOnInit(): void {
    this.gridRowData = ROW_DATA;
  }
  openGridModal(): void {
    this.dialog.open(AuditLogComponent, {
      width: '100%',
      disableClose: true
    });
  }
}
