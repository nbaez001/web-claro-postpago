import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './errors/page404/page404.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { RegistroDetalleComponent } from './pages/registro/registro-detalle/registro-detalle.component';
import { RegistroNombreComponent } from './pages/registro/registro-nombre/registro-nombre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product', component: ProductComponent },
  { path: 'page404', component: Page404Component },
  { path: 'paso-1', component: RegistroNombreComponent },
  { path: 'paso-2', component: RegistroDetalleComponent },
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
