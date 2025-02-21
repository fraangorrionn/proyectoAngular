import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosService } from '../../services/juegos.service';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarrouselComponent, MenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaJuegos: any[] = [];
  juegosFiltrados: any[] = [];
  imagenesCarrusel: string[] = [];

  constructor(private juegosService: JuegosService) {}

  ngOnInit(): void {
    this.obtenerJuegos();
  }

  obtenerJuegos(): void {
    this.juegosService.getJuegos().subscribe((response: any) => {
      if (response && response.results) {
        this.listaJuegos = response.results;
        this.juegosFiltrados = [...this.listaJuegos];

        // Seleccionar solo 5 imágenes destacadas para el carrusel
        this.imagenesCarrusel = this.listaJuegos.slice(0, 5).map(juego => juego.background_image);
      }
    }, error => console.error('Error al obtener los juegos:', error));
  }

  verDetalles(juego: any): void {
    console.log('Juego seleccionado:', juego);
    alert(`Juego: ${juego.name}\nRating: ${juego.rating}`);
  }

}
