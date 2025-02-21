import { Routes } from '@angular/router';
import { HomeComponent } from './principales/home/home.component';
import { DirectorioComponent } from './principales/directorio/directorio.component';
import { ContactoComponent } from './principales/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'directorio', component: DirectorioComponent },
  { path: 'contacto', component: ContactoComponent }
];
