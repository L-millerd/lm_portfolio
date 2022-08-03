import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CakeryHomeComponent } from './cakery/cakery-home/cakery-home.component';
import { CakeryProductsComponent } from './cakery/cakery-products/cakery-products.component';
import { OrderComponent } from './cakery/order/order.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about-me', component: AboutComponent},
  {path: 'test', component: TestComponent},

  {path: 'projects/the-cakery', component: CakeryHomeComponent},
  {path: 'projects/the-cakery/products', component: CakeryProductsComponent},
  {path: 'projects/the-cakery/order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
