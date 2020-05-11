import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HogarComponent } from './pages/hogar/hogar.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { RegistroDetalleComponent } from './pages/registro/registro-detalle/registro-detalle.component';
import { RegistroNombreComponent } from './pages/registro/registro-nombre/registro-nombre.component';
import { ChipsClaroComponent } from './pages/chips-claro/chips-claro.component';
import { ChipsComponent } from './pages/chips/chips.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CarouselModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
