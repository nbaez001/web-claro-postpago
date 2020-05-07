import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { Page404Component } from './errors/page404/page404.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CarouselModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
