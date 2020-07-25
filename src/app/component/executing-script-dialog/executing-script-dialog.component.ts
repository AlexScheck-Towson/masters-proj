import { Component } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-executing-script-dialog',
  templateUrl: './executing-script-dialog.component.html',
  styleUrls: ['./executing-script-dialog.component.css']
})
export class ExecutingScriptDialogComponent {

  constructor(private dialogRef: MatDialogRef<ExecutingScriptDialogComponent>) {
    dialogRef.disableClose = true;
    //dialogConfig.height = '400px;'
   }


}
