import { Routes } from '@angular/router';
import { Inicio } from './galeria/inicio/inicio';
import { Productos } from './galeria/productos/productos';
import { Registro } from './galeria/registro/registro';

export const routes: Routes = [
    {path:'inicio', component:Inicio},
    {path:'producto', component:Productos},
     {path:'registro', component:Registro},
];
