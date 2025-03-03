import { Component } from '@angular/core';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { TecnologiaComponent } from "./tecnologia/tecnologia.component";

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [ProyectoComponent, TecnologiaComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
