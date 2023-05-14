import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuditLogComponent } from './audit-log.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ag-grid-project';
  myForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    // constructor
    this.myForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
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
  resetForm(): void {
    this.myForm.reset();
  }

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;
      console.log(this.selectedFile);
      // const file =async (e: any) => {
      //   const workbook = XLSX.read(await e.files.arrayBuffer(), {type: 'binary'}); 
      // }
      // for (i = 0, f = files[i]; i != files.length; ++i) {
        if (this.selectedFile) {
          const reader = new FileReader();
          const name = this.selectedFile.name;
          reader.onload = function(e: ProgressEvent<FileReader>) {
              if (e.target) {
                const data = e.target.result;
                const workbook = XLSX.read(data, {type: 'binary'});
                console.log(workbook);
              }
              /* DO SOMETHING WITH workbook HERE */
          };
          reader.readAsBinaryString(this.selectedFile);
        }
    // }
  }
}
