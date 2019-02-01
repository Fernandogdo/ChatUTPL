import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlosarioService } from '../services/glosario.service';
import { DocenteService } from '../services/docente.service';
import { Glosario } from '../models/glosario';

declare var M: any;

@Component({
  selector: 'app-glosarios',
  templateUrl: './glosarios.component.html',
  styleUrls: ['./glosarios.component.css'],
  providers: [GlosarioService]
})
export class GlosariosComponent implements OnInit {
   idDocente;

  constructor(
    private glosarioService: GlosarioService,
    private docenteService: DocenteService,

  ) { }

  ngOnInit() {
    this.idDocente = this.docenteService.obtenerIdDocente()
    console.log(this.idDocente)
    var id = this.idDocente
    this.getGlosarios()
  }

  addGlosario(form: NgForm) {
    let glosario:any={
      title: form.value.title,
      description: form.value.description,
      docente: this.idDocente,
    }
    if(form.value._id) {
      this.glosarioService.putGlosario(form.value.ngforms)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado satisfactoriamente'});
          this.getGlosarios();
        })
    } else {
      this.glosarioService.postGlosario(glosario)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Guardado satisfactoriamente'});
          this.getGlosarios();
        });
      }
    }


  getGlosarios() {
    this.glosarioService.getGlosarios(this.idDocente)
    .subscribe(res => {
      this.glosarioService.glosarios = res as Glosario[]
    });
  }

  editGlosario(glosario: Glosario){
    this.glosarioService.selectedGlosario = glosario;
  }

  deleteGlosario(_id: string) {
    if(confirm('Seguro que deseas eliminar?')){
      this.glosarioService.deleteGlosario(_id)
        .subscribe(res => {
          this.getGlosarios();
          M.toast({html: 'Eliminado satisfactoriamente'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.glosarioService.selectedGlosario = new Glosario();
    }
  }

}
