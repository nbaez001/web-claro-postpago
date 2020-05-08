import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './errors/page404/page404.component';
import { AccesorioComponent } from './pages/accesorio/accesorio.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HogarComponent } from './pages/hogar/hogar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { RegistroDetalleComponent } from './pages/registro/registro-detalle/registro-detalle.component';
import { RegistroNombreComponent } from './pages/registro/registro-nombre/registro-nombre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product', component: ProductComponent },
  { path: 'hogar', component: HogarComponent },
  { path: 'accesorios', component: AccesorioComponent },
  { path: 'paso-1', component: RegistroNombreComponent },
  { path: 'paso-2', component: RegistroDetalleComponent },
  { path: 'page404', component: Page404Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
