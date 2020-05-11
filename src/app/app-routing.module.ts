import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './errors/page404/page404.component';
import { AccesorioComponent } from './pages/accesorio/accesorio.component';
import { DetalleAccesorioComponent } from './pages/accesorio/detalle-accesorio/detalle-accesorio.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ChipsClaroComponent } from './pages/chips-claro/chips-claro.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { DetalleHogarComponent } from './pages/hogar/detalle-hogar/detalle-hogar.component';
import { HogarComponent } from './pages/hogar/hogar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutPasosComponent } from './pages/layout-pasos/layout-pasos.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DetalleOloComponent } from './pages/olo/detalle-olo/detalle-olo.component';
import { OloComponent } from './pages/olo/olo.component';
import { ProductComponent } from './pages/product/product.component';
import { RegistroDetalleComponent } from './pages/registro/registro-detalle/registro-detalle.component';
import { RegistroNombreComponent } from './pages/registro/registro-nombre/registro-nombre.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/chips', component: ChipsComponent },
      { path: 'hogar', component: HogarComponent },
      { path: 'accesorios', component: AccesorioComponent },
      { path: 'chips-claro', component: ChipsClaroComponent },
      { path: 'page404', component: Page404Component },
      { path: 'olo', component: OloComponent },
      { path: 'hogar-detalle', component: DetalleHogarComponent },
      { path: 'accesorio-detalle', component: DetalleAccesorioComponent },
      { path: 'olo-detalle', component: DetalleOloComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'registro',
    component: LayoutPasosComponent,
    children: [
      { path: 'paso-1', component: RegistroNombreComponent },
      { path: 'paso-2', component: RegistroDetalleComponent },
      { path: '', redirectTo: 'paso-1', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
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
