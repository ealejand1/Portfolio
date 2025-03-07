import { Component } from '@angular/core';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { TecnologiaComponent } from "./tecnologia/tecnologia.component";
import { Tecnologias } from '../../entidades/tecnologias';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [ProyectoComponent, TecnologiaComponent,NgFor],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  tecnologias:string[];

  constructor(){
    this.tecnologias = new Tecnologias().obtenerTecnologias();
    }

  

}
