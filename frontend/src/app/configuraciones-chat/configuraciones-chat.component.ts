import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-configuraciones-chat',
  templateUrl: './configuraciones-chat.component.html',
  styleUrls: ['./configuraciones-chat.component.css']
})

export class ConfiguracionesChatComponent{
  constructor(
    public dialogRef: MatDialogRef<ConfiguracionesChatComponent>,
    ) {

    }

  close() {
    this.dialogRef.close();
  }
}
