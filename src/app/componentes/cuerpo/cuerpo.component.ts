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

  botonClick():void{
    window.open("https://github.com/ealejand1","_blank");
  }
  botonClick2():void{
    window.open("https://www.linkedin.com/in/erik-javier-alejandro-quezada-421195198/", "_blank");
  }

}
