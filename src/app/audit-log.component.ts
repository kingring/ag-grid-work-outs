import { Component, OnInit } from '@angular/core';
import { AuditLog, COL_DEFS, ROW_DATA } from './grid-const';

@Component({
    selector: 'app-audit-log',
    templateUrl: './audit-log.component.html'
})
export class AuditLogComponent implements OnInit {
    gridRowData: AuditLog[] = [];
    gridColumnDefs = COL_DEFS;
    domLayout!: string;
    colResizeDefault!: string;
    defaultColDef!: {[key: string]: any};
    ngOnInit(): void {
        this.gridRowData = Array(20).fill(ROW_DATA[1]);
        this.domLayout = 'autoHeight';
        this.colResizeDefault = 'shift'
        this.defaultColDef = { resizable: true };
    }

}

