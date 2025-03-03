import { Component } from '@angular/core';
import { ProyectoComponent } from './proyecto/proyecto.component';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [ProyectoComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
