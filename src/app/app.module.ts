import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './errors/page404/page404.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderRegistroComponent } from './layout/registro/header-registro/header-registro.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AccesorioComponent } from './pages/accesorio/accesorio.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ChipsClaroComponent } from './pages/chips-claro/chips-claro.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { HogarComponent } from './pages/hogar/hogar.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutPasosComponent } from './pages/layout-pasos/layout-pasos.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductComponent } from './pages/product/product.component';
import { RegistroDetalleComponent } from './pages/registro/registro-detalle/registro-detalle.component';
import { RegistroNombreComponent } from './pages/registro/registro-nombre/registro-nombre.component';
import { OloComponent } from './pages/olo/olo.component';
import { DetalleOloComponent } from './pages/olo/detalle-olo/detalle-olo.component';
import { DetalleHogarComponent } from './pages/hogar/detalle-hogar/detalle-hogar.component';
import { DetalleAccesorioComponent } from './pages/accesorio/detalle-accesorio/detalle-accesorio.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    HomeComponent,
    CarouselComponent,
    HeaderRegistroComponent,
    RegistroDetalleComponent,
    RegistroNombreComponent,
    SidebarComponent,
    AccesorioComponent,
    HogarComponent,
    ChipsClaroComponent,
    ChipsComponent,
    LayoutPasosComponent,
    LayoutComponent,
    OloComponent,
    DetalleOloComponent,
    DetalleHogarComponent,
    DetalleAccesorioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CarouselModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
