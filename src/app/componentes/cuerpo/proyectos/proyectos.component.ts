import { Component } from '@angular/core';
import { ProyectoComponent } from './proyecto/proyecto.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
