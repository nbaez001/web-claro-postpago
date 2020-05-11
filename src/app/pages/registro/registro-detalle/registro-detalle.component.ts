import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-detalle',
  templateUrl: './registro-detalle.component.html',
  styleUrls: ['./registro-detalle.component.scss'],
})
export class RegistroDetalleComponent implements OnInit {
  URL_DEPARTAMENTOS =
    'https://cors-anywhere.herokuapp.com/200.108.99.46/wps/wcm/connect/tienda%20virtual%20library/servicios%20json/departamentos.json';
  URL_PROVINCIAS =
    'https://cors-anywhere.herokuapp.com/200.108.99.46/wps/wcm/connect/tienda%20virtual%20library/servicios%20json/provincias.json';
  URL_DISTRITOS =
    'https://cors-anywhere.herokuapp.com/200.108.99.46/wps/wcm/connect/tienda%20virtual%20library/servicios%20json/distritos.json';
  header: HttpHeaders;
  departamentoList;
  provinciaStore;
  distritoStore;
  provinciaList;
  distritoList;

  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      departamento: [''],
      provincia: [''],
      distrito: [''],
    });

    this.http.get(this.URL_DEPARTAMENTOS).subscribe((data) => {
      this.departamentoList = data;
    });

    this.http.get(this.URL_PROVINCIAS).subscribe((data) => {
      this.provinciaStore = data;
    });

    this.http.get(this.URL_DISTRITOS).subscribe((data) => {
      this.distritoStore = data;
    });

    this.form.controls.departamento.valueChanges.subscribe((idDep) => {
      if (idDep !== undefined) {
        this.provinciaList = this.buscarProvincia(idDep);
        this.form.controls.provincia.setValue('');
        this.form.controls.distrito.setValue('');
      }
    });

    this.form.controls.provincia.valueChanges.subscribe((idPro) => {
      const idDep = this.form.controls.departamento.value;
      if (idPro !== undefined && idDep !== undefined) {
        this.distritoList = this.buscarDistrito(idDep, idPro);
        console.log(this.distritoList);
      }
    });
  }

  buscarProvincia(idDep: string) {
    return this.provinciaStore.filter((element) => {
      return element.codest === idDep;
    });
  }

  buscarDistrito(idDep: string, idPro: string) {
    console.log(idDep + ' ' + idPro);
    return this.distritoStore.filter((element) => {
      return element.codest === idDep && element.codpvc === idPro;
    });
  }
}
