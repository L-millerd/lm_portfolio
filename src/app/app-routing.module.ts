import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CakeryHomeComponent } from './cakery/cakery-home/cakery-home.component';
import { CakeryProductsComponent } from './cakery/cakery-products/cakery-products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestComponent } from './test/test.component';
import { ProductDetailsComponent } from './proj-butter/product-details/product-details.component';
import { AdminEditComponent } from './proj-butter/admin-edit/admin-edit.component';
import { AdminViewComponent } from './proj-butter/admin-view/admin-view.component';
import { BHomeComponent } from './proj-butter/b-home/b-home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about-me', component: AboutComponent},
  {path: 'test', component: TestComponent},

  {path: 'projects/the-cakery', component: CakeryHomeComponent},
  {path: 'projects/the-cakery/products', component: CakeryProductsComponent},

  {path: 'projects/butter-snowboards', component: BHomeComponent},
  {path: 'projects/butter-snowboards/:id', component: ProductDetailsComponent},
  {path: 'projects/butter-snowboards/admin-edit/:id', component: AdminEditComponent},
  {path: 'projects/butter-snowboards/admin-view', component: AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
