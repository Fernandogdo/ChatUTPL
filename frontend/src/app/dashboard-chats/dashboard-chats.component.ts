import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { MatDialog } from '@angular/material';
import { ConfiguracionesChatComponent } from '../configuraciones-chat/configuraciones-chat.component';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';
@Component({
  selector: 'app-dashboard-chats',
  templateUrl: './dashboard-chats.component.html',
  styleUrls: ['./dashboard-chats.component.css']
})

export class DashboardChatsComponent implements OnInit {

  private nombre: string;

  constructor(
    private docenteService: DocenteService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.nombre = this.docenteService.obtenerNombresDocente() + " " + this.docenteService.ObtenerApellidosDocente();
  }

  modal(): void {
    this.dialog.open(ConfiguracionesChatComponent, {
      height: '400px',
      width: '600px',
    });
  }


}
