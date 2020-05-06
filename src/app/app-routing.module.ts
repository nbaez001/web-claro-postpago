import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '**', component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
