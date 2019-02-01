import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Glosario } from '../models/glosario';
import { GlosariosComponent } from '../glosarios/glosarios.component';


@Injectable({
  providedIn: 'root'
})
export class GlosarioService {

  selectedGlosario: Glosario;
  glosarios: Glosario[];
  readonly URL_API = 'http://localhost:3000/api/glosarios';

  constructor(private http: HttpClient) {
    this.selectedGlosario = new Glosario();
  }

  getGlosarios(docente) {
    return this.http.get(this.URL_API ,{params:{docente: docente}})
  }

  postGlosario(Glosario: Glosario) {
    return this.http.post(this.URL_API, Glosario);
  }

  putGlosario(glosario: Glosario){
    return this.http.put(this.URL_API + `/${glosario._id}`, glosario);
  }

  deleteGlosario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
