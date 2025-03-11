import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);//Obtenemos el elemento por su id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' }); //Funcion de JS para hacer scroll suave
    }
  }
}
