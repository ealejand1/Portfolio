import { Component } from '@angular/core';
import { ProyectosComponent } from './proyectos/proyectos.component';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [ProyectosComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
