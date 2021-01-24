import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'CaPitAn aMerIcA';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.4;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Calle Londres',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data!!');
    }, 4500);
  });

  fecha: Date = new Date();
  idioma: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/Dc0PgJm3KA0';
  activar : boolean = true;
}
